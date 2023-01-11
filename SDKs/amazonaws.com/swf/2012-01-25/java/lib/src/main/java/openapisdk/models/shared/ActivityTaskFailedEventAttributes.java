package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityTaskFailedEventAttributes
 * Provides the details of the <code>ActivityTaskFailed</code> event.
**/
public class ActivityTaskFailedEventAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public ActivityTaskFailedEventAttributes withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public ActivityTaskFailedEventAttributes withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("scheduledEventId")
    public Long scheduledEventId;
    public ActivityTaskFailedEventAttributes withScheduledEventId(Long scheduledEventId) {
        this.scheduledEventId = scheduledEventId;
        return this;
    }
    @JsonProperty("startedEventId")
    public Long startedEventId;
    public ActivityTaskFailedEventAttributes withStartedEventId(Long startedEventId) {
        this.startedEventId = startedEventId;
        return this;
    }
}