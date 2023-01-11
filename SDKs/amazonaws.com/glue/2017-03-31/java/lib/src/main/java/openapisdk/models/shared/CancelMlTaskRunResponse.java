package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CancelMlTaskRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public TaskStatusTypeEnum status;
    public CancelMlTaskRunResponse withStatus(TaskStatusTypeEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskRunId")
    public String taskRunId;
    public CancelMlTaskRunResponse withTaskRunId(String taskRunId) {
        this.taskRunId = taskRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransformId")
    public String transformId;
    public CancelMlTaskRunResponse withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
}