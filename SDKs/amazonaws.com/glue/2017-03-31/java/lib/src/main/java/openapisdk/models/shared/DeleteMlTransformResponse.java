package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteMlTransformResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransformId")
    public String transformId;
    public DeleteMlTransformResponse withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
}