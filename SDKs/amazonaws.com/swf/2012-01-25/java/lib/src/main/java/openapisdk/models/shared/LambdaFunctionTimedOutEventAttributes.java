package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaFunctionTimedOutEventAttributes
 * Provides details of the <code>LambdaFunctionTimedOut</code> event.
**/
public class LambdaFunctionTimedOutEventAttributes {
    @JsonProperty("scheduledEventId")
    public Long scheduledEventId;
    public LambdaFunctionTimedOutEventAttributes withScheduledEventId(Long scheduledEventId) {
        this.scheduledEventId = scheduledEventId;
        return this;
    }
    @JsonProperty("startedEventId")
    public Long startedEventId;
    public LambdaFunctionTimedOutEventAttributes withStartedEventId(Long startedEventId) {
        this.startedEventId = startedEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutType")
    public LambdaFunctionTimeoutTypeEnum timeoutType;
    public LambdaFunctionTimedOutEventAttributes withTimeoutType(LambdaFunctionTimeoutTypeEnum timeoutType) {
        this.timeoutType = timeoutType;
        return this;
    }
}