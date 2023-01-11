package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLayerRequest {
    @JsonProperty("LayerId")
    public String layerId;
    public DeleteLayerRequest withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
}