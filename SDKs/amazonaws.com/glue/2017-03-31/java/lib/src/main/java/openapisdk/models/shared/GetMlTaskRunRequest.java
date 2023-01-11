package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMlTaskRunRequest {
    @JsonProperty("TaskRunId")
    public String taskRunId;
    public GetMlTaskRunRequest withTaskRunId(String taskRunId) {
        this.taskRunId = taskRunId;
        return this;
    }
    @JsonProperty("TransformId")
    public String transformId;
    public GetMlTaskRunRequest withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
}