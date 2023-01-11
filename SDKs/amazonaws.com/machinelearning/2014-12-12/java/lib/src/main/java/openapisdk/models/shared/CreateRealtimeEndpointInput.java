package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateRealtimeEndpointInput {
    @JsonProperty("MLModelId")
    public String mlModelId;
    public CreateRealtimeEndpointInput withMlModelId(String mlModelId) {
        this.mlModelId = mlModelId;
        return this;
    }
}