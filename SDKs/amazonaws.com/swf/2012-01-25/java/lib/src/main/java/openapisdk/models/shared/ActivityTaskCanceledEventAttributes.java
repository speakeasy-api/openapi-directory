package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityTaskCanceledEventAttributes
 * Provides the details of the <code>ActivityTaskCanceled</code> event.
**/
public class ActivityTaskCanceledEventAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public ActivityTaskCanceledEventAttributes withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestCancelRequestedEventId")
    public Long latestCancelRequestedEventId;
    public ActivityTaskCanceledEventAttributes withLatestCancelRequestedEventId(Long latestCancelRequestedEventId) {
        this.latestCancelRequestedEventId = latestCancelRequestedEventId;
        return this;
    }
    @JsonProperty("scheduledEventId")
    public Long scheduledEventId;
    public ActivityTaskCanceledEventAttributes withScheduledEventId(Long scheduledEventId) {
        this.scheduledEventId = scheduledEventId;
        return this;
    }
    @JsonProperty("startedEventId")
    public Long startedEventId;
    public ActivityTaskCanceledEventAttributes withStartedEventId(Long startedEventId) {
        this.startedEventId = startedEventId;
        return this;
    }
}