package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ScheduleActivityTaskFailedEventAttributes
 * Provides the details of the <code>ScheduleActivityTaskFailed</code> event.
**/
public class ScheduleActivityTaskFailedEventAttributes {
    @JsonProperty("activityId")
    public String activityId;
    public ScheduleActivityTaskFailedEventAttributes withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
    @JsonProperty("activityType")
    public ActivityType activityType;
    public ScheduleActivityTaskFailedEventAttributes withActivityType(ActivityType activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonProperty("cause")
    public ScheduleActivityTaskFailedCauseEnum cause;
    public ScheduleActivityTaskFailedEventAttributes withCause(ScheduleActivityTaskFailedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public ScheduleActivityTaskFailedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
}