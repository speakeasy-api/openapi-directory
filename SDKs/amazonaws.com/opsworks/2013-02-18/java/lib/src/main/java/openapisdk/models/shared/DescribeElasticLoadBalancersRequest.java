package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeElasticLoadBalancersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LayerIds")
    public String[] layerIds;
    public DescribeElasticLoadBalancersRequest withLayerIds(String[] layerIds) {
        this.layerIds = layerIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackId")
    public String stackId;
    public DescribeElasticLoadBalancersRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}