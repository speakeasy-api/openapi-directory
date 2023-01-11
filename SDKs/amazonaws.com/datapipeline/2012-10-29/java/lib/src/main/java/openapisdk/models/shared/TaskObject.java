package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskObject
 * Contains information about a pipeline task that is assigned to a task runner.
**/
public class TaskObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attemptId")
    public String attemptId;
    public TaskObject withAttemptId(String attemptId) {
        this.attemptId = attemptId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objects")
    public java.util.Map<String, PipelineObject> objects;
    public TaskObject withObjects(java.util.Map<String, PipelineObject> objects) {
        this.objects = objects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineId")
    public String pipelineId;
    public TaskObject withPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public TaskObject withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}