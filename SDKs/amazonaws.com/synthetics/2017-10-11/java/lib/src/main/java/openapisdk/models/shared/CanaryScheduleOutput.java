package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CanaryScheduleOutput
 * How long, in seconds, for the canary to continue making regular runs according to the schedule in the <code>Expression</code> value.
**/
public class CanaryScheduleOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DurationInSeconds")
    public Long durationInSeconds;
    public CanaryScheduleOutput withDurationInSeconds(Long durationInSeconds) {
        this.durationInSeconds = durationInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expression")
    public String expression;
    public CanaryScheduleOutput withExpression(String expression) {
        this.expression = expression;
        return this;
    }
}