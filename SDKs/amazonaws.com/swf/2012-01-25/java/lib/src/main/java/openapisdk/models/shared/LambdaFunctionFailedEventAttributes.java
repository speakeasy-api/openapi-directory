package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaFunctionFailedEventAttributes
 * Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types.
**/
public class LambdaFunctionFailedEventAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public LambdaFunctionFailedEventAttributes withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public LambdaFunctionFailedEventAttributes withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("scheduledEventId")
    public Long scheduledEventId;
    public LambdaFunctionFailedEventAttributes withScheduledEventId(Long scheduledEventId) {
        this.scheduledEventId = scheduledEventId;
        return this;
    }
    @JsonProperty("startedEventId")
    public Long startedEventId;
    public LambdaFunctionFailedEventAttributes withStartedEventId(Long startedEventId) {
        this.startedEventId = startedEventId;
        return this;
    }
}