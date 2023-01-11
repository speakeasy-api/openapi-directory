package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLayersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Layers")
    public LayersListItem[] layers;
    public ListLayersResponse withLayers(LayersListItem[] layers) {
        this.layers = layers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListLayersResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}