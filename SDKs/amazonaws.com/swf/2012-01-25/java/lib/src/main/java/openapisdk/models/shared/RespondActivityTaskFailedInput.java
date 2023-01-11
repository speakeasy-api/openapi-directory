package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RespondActivityTaskFailedInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public RespondActivityTaskFailedInput withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public RespondActivityTaskFailedInput withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("taskToken")
    public String taskToken;
    public RespondActivityTaskFailedInput withTaskToken(String taskToken) {
        this.taskToken = taskToken;
        return this;
    }
}