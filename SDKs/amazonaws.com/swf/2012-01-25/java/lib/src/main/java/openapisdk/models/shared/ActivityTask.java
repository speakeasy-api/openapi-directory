package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityTask
 * Unit of work sent to an activity worker.
**/
public class ActivityTask {
    @JsonProperty("activityId")
    public String activityId;
    public ActivityTask withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
    @JsonProperty("activityType")
    public ActivityType activityType;
    public ActivityTask withActivityType(ActivityType activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public ActivityTask withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonProperty("startedEventId")
    public Long startedEventId;
    public ActivityTask withStartedEventId(Long startedEventId) {
        this.startedEventId = startedEventId;
        return this;
    }
    @JsonProperty("taskToken")
    public String taskToken;
    public ActivityTask withTaskToken(String taskToken) {
        this.taskToken = taskToken;
        return this;
    }
    @JsonProperty("workflowExecution")
    public WorkflowExecution workflowExecution;
    public ActivityTask withWorkflowExecution(WorkflowExecution workflowExecution) {
        this.workflowExecution = workflowExecution;
        return this;
    }
}