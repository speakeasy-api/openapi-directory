package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ActivityTaskCancelRequestedEventAttributes
 * Provides the details of the <code>ActivityTaskCancelRequested</code> event.
**/
public class ActivityTaskCancelRequestedEventAttributes {
    @JsonProperty("activityId")
    public String activityId;
    public ActivityTaskCancelRequestedEventAttributes withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public ActivityTaskCancelRequestedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
}