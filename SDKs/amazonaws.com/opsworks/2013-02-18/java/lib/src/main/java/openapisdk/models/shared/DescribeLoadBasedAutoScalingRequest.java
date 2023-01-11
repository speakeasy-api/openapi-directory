package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeLoadBasedAutoScalingRequest {
    @JsonProperty("LayerIds")
    public String[] layerIds;
    public DescribeLoadBasedAutoScalingRequest withLayerIds(String[] layerIds) {
        this.layerIds = layerIds;
        return this;
    }
}