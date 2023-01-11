package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeLayersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LayerIds")
    public String[] layerIds;
    public DescribeLayersRequest withLayerIds(String[] layerIds) {
        this.layerIds = layerIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackId")
    public String stackId;
    public DescribeLayersRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}