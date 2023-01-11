package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityTaskScheduledEventAttributes
 * Provides the details of the <code>ActivityTaskScheduled</code> event.
**/
public class ActivityTaskScheduledEventAttributes {
    @JsonProperty("activityId")
    public String activityId;
    public ActivityTaskScheduledEventAttributes withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
    @JsonProperty("activityType")
    public ActivityType activityType;
    public ActivityTaskScheduledEventAttributes withActivityType(ActivityType activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("control")
    public String control;
    public ActivityTaskScheduledEventAttributes withControl(String control) {
        this.control = control;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public ActivityTaskScheduledEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heartbeatTimeout")
    public String heartbeatTimeout;
    public ActivityTaskScheduledEventAttributes withHeartbeatTimeout(String heartbeatTimeout) {
        this.heartbeatTimeout = heartbeatTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public ActivityTaskScheduledEventAttributes withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleToCloseTimeout")
    public String scheduleToCloseTimeout;
    public ActivityTaskScheduledEventAttributes withScheduleToCloseTimeout(String scheduleToCloseTimeout) {
        this.scheduleToCloseTimeout = scheduleToCloseTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleToStartTimeout")
    public String scheduleToStartTimeout;
    public ActivityTaskScheduledEventAttributes withScheduleToStartTimeout(String scheduleToStartTimeout) {
        this.scheduleToStartTimeout = scheduleToStartTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startToCloseTimeout")
    public String startToCloseTimeout;
    public ActivityTaskScheduledEventAttributes withStartToCloseTimeout(String startToCloseTimeout) {
        this.startToCloseTimeout = startToCloseTimeout;
        return this;
    }
    @JsonProperty("taskList")
    public TaskList taskList;
    public ActivityTaskScheduledEventAttributes withTaskList(TaskList taskList) {
        this.taskList = taskList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskPriority")
    public String taskPriority;
    public ActivityTaskScheduledEventAttributes withTaskPriority(String taskPriority) {
        this.taskPriority = taskPriority;
        return this;
    }
}