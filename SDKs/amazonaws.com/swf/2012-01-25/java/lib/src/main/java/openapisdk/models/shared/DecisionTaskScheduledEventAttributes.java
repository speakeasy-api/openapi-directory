package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DecisionTaskScheduledEventAttributes
 * Provides details about the <code>DecisionTaskScheduled</code> event.
**/
public class DecisionTaskScheduledEventAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startToCloseTimeout")
    public String startToCloseTimeout;
    public DecisionTaskScheduledEventAttributes withStartToCloseTimeout(String startToCloseTimeout) {
        this.startToCloseTimeout = startToCloseTimeout;
        return this;
    }
    @JsonProperty("taskList")
    public TaskList taskList;
    public DecisionTaskScheduledEventAttributes withTaskList(TaskList taskList) {
        this.taskList = taskList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskPriority")
    public String taskPriority;
    public DecisionTaskScheduledEventAttributes withTaskPriority(String taskPriority) {
        this.taskPriority = taskPriority;
        return this;
    }
}