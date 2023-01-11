package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteModelRequest {
    @JsonProperty("ModelName")
    public String modelName;
    public DeleteModelRequest withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
}