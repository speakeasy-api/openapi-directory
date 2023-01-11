package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DecisionTaskTimedOutEventAttributes
 * Provides the details of the <code>DecisionTaskTimedOut</code> event.
**/
public class DecisionTaskTimedOutEventAttributes {
    @JsonProperty("scheduledEventId")
    public Long scheduledEventId;
    public DecisionTaskTimedOutEventAttributes withScheduledEventId(Long scheduledEventId) {
        this.scheduledEventId = scheduledEventId;
        return this;
    }
    @JsonProperty("startedEventId")
    public Long startedEventId;
    public DecisionTaskTimedOutEventAttributes withStartedEventId(Long startedEventId) {
        this.startedEventId = startedEventId;
        return this;
    }
    @JsonProperty("timeoutType")
    public DecisionTaskTimeoutTypeEnum timeoutType;
    public DecisionTaskTimedOutEventAttributes withTimeoutType(DecisionTaskTimeoutTypeEnum timeoutType) {
        this.timeoutType = timeoutType;
        return this;
    }
}