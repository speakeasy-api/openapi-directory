package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityTaskTimedOutEventAttributes
 * Provides the details of the <code>ActivityTaskTimedOut</code> event.
**/
public class ActivityTaskTimedOutEventAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public ActivityTaskTimedOutEventAttributes withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonProperty("scheduledEventId")
    public Long scheduledEventId;
    public ActivityTaskTimedOutEventAttributes withScheduledEventId(Long scheduledEventId) {
        this.scheduledEventId = scheduledEventId;
        return this;
    }
    @JsonProperty("startedEventId")
    public Long startedEventId;
    public ActivityTaskTimedOutEventAttributes withStartedEventId(Long startedEventId) {
        this.startedEventId = startedEventId;
        return this;
    }
    @JsonProperty("timeoutType")
    public ActivityTaskTimeoutTypeEnum timeoutType;
    public ActivityTaskTimedOutEventAttributes withTimeoutType(ActivityTaskTimeoutTypeEnum timeoutType) {
        this.timeoutType = timeoutType;
        return this;
    }
}