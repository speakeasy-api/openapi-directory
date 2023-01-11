package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteMlModelInput {
    @JsonProperty("MLModelId")
    public String mlModelId;
    public DeleteMlModelInput withMlModelId(String mlModelId) {
        this.mlModelId = mlModelId;
        return this;
    }
}