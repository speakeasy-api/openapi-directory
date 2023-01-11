package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMlTransformRequest {
    @JsonProperty("TransformId")
    public String transformId;
    public GetMlTransformRequest withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
}