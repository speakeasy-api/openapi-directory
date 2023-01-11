package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaFunctionScheduleFailedEventDetails
 * Contains details about a failed lambda function schedule event that occurred during an execution.
**/
public class LambdaFunctionScheduleFailedEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public LambdaFunctionScheduleFailedEventDetails withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public LambdaFunctionScheduleFailedEventDetails withError(String error) {
        this.error = error;
        return this;
    }
}