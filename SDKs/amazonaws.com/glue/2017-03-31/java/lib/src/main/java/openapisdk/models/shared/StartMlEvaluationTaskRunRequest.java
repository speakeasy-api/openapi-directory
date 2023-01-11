package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartMlEvaluationTaskRunRequest {
    @JsonProperty("TransformId")
    public String transformId;
    public StartMlEvaluationTaskRunRequest withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
}