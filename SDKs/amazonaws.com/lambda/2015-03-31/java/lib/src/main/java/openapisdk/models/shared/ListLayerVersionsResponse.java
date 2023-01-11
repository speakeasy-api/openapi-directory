package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLayerVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LayerVersions")
    public LayerVersionsListItem[] layerVersions;
    public ListLayerVersionsResponse withLayerVersions(LayerVersionsListItem[] layerVersions) {
        this.layerVersions = layerVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListLayerVersionsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}