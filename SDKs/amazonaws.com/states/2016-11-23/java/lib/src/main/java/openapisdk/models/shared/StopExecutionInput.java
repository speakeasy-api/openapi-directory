package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StopExecutionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public StopExecutionInput withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public StopExecutionInput withError(String error) {
        this.error = error;
        return this;
    }
    @JsonProperty("executionArn")
    public String executionArn;
    public StopExecutionInput withExecutionArn(String executionArn) {
        this.executionArn = executionArn;
        return this;
    }
}