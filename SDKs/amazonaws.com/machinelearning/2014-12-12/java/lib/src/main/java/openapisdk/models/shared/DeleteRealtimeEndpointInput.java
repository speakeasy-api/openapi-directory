package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRealtimeEndpointInput {
    @JsonProperty("MLModelId")
    public String mlModelId;
    public DeleteRealtimeEndpointInput withMlModelId(String mlModelId) {
        this.mlModelId = mlModelId;
        return this;
    }
}