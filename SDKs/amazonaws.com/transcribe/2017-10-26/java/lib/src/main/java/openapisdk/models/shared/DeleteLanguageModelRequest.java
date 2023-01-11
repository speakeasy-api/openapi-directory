package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLanguageModelRequest {
    @JsonProperty("ModelName")
    public String modelName;
    public DeleteLanguageModelRequest withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
}