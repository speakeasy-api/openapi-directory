package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartLambdaFunctionFailedEventAttributes
 * Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types.
**/
public class StartLambdaFunctionFailedEventAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public StartLambdaFunctionFailedCauseEnum cause;
    public StartLambdaFunctionFailedEventAttributes withCause(StartLambdaFunctionFailedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public StartLambdaFunctionFailedEventAttributes withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledEventId")
    public Long scheduledEventId;
    public StartLambdaFunctionFailedEventAttributes withScheduledEventId(Long scheduledEventId) {
        this.scheduledEventId = scheduledEventId;
        return this;
    }
}