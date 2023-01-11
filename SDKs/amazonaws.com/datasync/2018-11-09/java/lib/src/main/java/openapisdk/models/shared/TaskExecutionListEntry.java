package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskExecutionListEntry
 * Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html">ListTaskExecutions</a> operation is called.
**/
public class TaskExecutionListEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public TaskExecutionStatusEnum status;
    public TaskExecutionListEntry withStatus(TaskExecutionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskExecutionArn")
    public String taskExecutionArn;
    public TaskExecutionListEntry withTaskExecutionArn(String taskExecutionArn) {
        this.taskExecutionArn = taskExecutionArn;
        return this;
    }
}