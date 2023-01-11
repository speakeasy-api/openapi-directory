package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCanaryRequestBodySchedule
 * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
**/
public class CreateCanaryRequestBodySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DurationInSeconds")
    public Long durationInSeconds;
    public CreateCanaryRequestBodySchedule withDurationInSeconds(Long durationInSeconds) {
        this.durationInSeconds = durationInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expression")
    public String expression;
    public CreateCanaryRequestBodySchedule withExpression(String expression) {
        this.expression = expression;
        return this;
    }
}