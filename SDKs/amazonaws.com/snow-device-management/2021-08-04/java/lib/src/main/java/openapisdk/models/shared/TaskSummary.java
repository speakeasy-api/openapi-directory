package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskSummary
 * Information about the task assigned to one or many devices.
**/
public class TaskSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public TaskStateEnum state;
    public TaskSummary withState(TaskStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public TaskSummary withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskArn")
    public String taskArn;
    public TaskSummary withTaskArn(String taskArn) {
        this.taskArn = taskArn;
        return this;
    }
    @JsonProperty("taskId")
    public String taskId;
    public TaskSummary withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}