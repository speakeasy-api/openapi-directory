package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaFunctionStartFailedEventDetails
 * Contains details about a lambda function that failed to start during an execution.
**/
public class LambdaFunctionStartFailedEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public LambdaFunctionStartFailedEventDetails withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public LambdaFunctionStartFailedEventDetails withError(String error) {
        this.error = error;
        return this;
    }
}