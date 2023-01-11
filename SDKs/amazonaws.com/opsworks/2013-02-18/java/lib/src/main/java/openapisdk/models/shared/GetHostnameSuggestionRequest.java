package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetHostnameSuggestionRequest {
    @JsonProperty("LayerId")
    public String layerId;
    public GetHostnameSuggestionRequest withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
}