package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMlTransformResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransformId")
    public String transformId;
    public UpdateMlTransformResponse withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
}