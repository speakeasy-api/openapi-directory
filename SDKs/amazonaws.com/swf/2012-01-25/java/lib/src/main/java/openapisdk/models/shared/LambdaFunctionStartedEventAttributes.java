package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LambdaFunctionStartedEventAttributes
 * Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types.
**/
public class LambdaFunctionStartedEventAttributes {
    @JsonProperty("scheduledEventId")
    public Long scheduledEventId;
    public LambdaFunctionStartedEventAttributes withScheduledEventId(Long scheduledEventId) {
        this.scheduledEventId = scheduledEventId;
        return this;
    }
}