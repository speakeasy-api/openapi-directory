package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionAbortedEventDetails
 * Contains details about an abort of an execution.
**/
public class ExecutionAbortedEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public ExecutionAbortedEventDetails withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public ExecutionAbortedEventDetails withError(String error) {
        this.error = error;
        return this;
    }
}