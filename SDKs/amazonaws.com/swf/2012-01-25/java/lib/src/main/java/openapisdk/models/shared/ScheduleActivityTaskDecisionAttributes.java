package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScheduleActivityTaskDecisionAttributes
 * <p>Provides the details of the <code>ScheduleActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code> – String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code> – String constraint. The key is <code>swf:activityType.version</code>.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
**/
public class ScheduleActivityTaskDecisionAttributes {
    @JsonProperty("activityId")
    public String activityId;
    public ScheduleActivityTaskDecisionAttributes withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
    @JsonProperty("activityType")
    public ActivityType activityType;
    public ScheduleActivityTaskDecisionAttributes withActivityType(ActivityType activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("control")
    public String control;
    public ScheduleActivityTaskDecisionAttributes withControl(String control) {
        this.control = control;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heartbeatTimeout")
    public String heartbeatTimeout;
    public ScheduleActivityTaskDecisionAttributes withHeartbeatTimeout(String heartbeatTimeout) {
        this.heartbeatTimeout = heartbeatTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public ScheduleActivityTaskDecisionAttributes withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleToCloseTimeout")
    public String scheduleToCloseTimeout;
    public ScheduleActivityTaskDecisionAttributes withScheduleToCloseTimeout(String scheduleToCloseTimeout) {
        this.scheduleToCloseTimeout = scheduleToCloseTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleToStartTimeout")
    public String scheduleToStartTimeout;
    public ScheduleActivityTaskDecisionAttributes withScheduleToStartTimeout(String scheduleToStartTimeout) {
        this.scheduleToStartTimeout = scheduleToStartTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startToCloseTimeout")
    public String startToCloseTimeout;
    public ScheduleActivityTaskDecisionAttributes withStartToCloseTimeout(String startToCloseTimeout) {
        this.startToCloseTimeout = startToCloseTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskList")
    public TaskList taskList;
    public ScheduleActivityTaskDecisionAttributes withTaskList(TaskList taskList) {
        this.taskList = taskList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskPriority")
    public String taskPriority;
    public ScheduleActivityTaskDecisionAttributes withTaskPriority(String taskPriority) {
        this.taskPriority = taskPriority;
        return this;
    }
}