package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaFunctionTimedOutEventDetails
 * Contains details about a lambda function timeout that occurred during an execution.
**/
public class LambdaFunctionTimedOutEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public LambdaFunctionTimedOutEventDetails withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public LambdaFunctionTimedOutEventDetails withError(String error) {
        this.error = error;
        return this;
    }
}