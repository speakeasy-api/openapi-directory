package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendTaskFailureInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public SendTaskFailureInput withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public SendTaskFailureInput withError(String error) {
        this.error = error;
        return this;
    }
    @JsonProperty("taskToken")
    public String taskToken;
    public SendTaskFailureInput withTaskToken(String taskToken) {
        this.taskToken = taskToken;
        return this;
    }
}