package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelMlTaskRunRequest {
    @JsonProperty("TaskRunId")
    public String taskRunId;
    public CancelMlTaskRunRequest withTaskRunId(String taskRunId) {
        this.taskRunId = taskRunId;
        return this;
    }
    @JsonProperty("TransformId")
    public String transformId;
    public CancelMlTaskRunRequest withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
}