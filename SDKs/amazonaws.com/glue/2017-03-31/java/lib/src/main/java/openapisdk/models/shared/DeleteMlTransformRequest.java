package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteMlTransformRequest {
    @JsonProperty("TransformId")
    public String transformId;
    public DeleteMlTransformRequest withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
}