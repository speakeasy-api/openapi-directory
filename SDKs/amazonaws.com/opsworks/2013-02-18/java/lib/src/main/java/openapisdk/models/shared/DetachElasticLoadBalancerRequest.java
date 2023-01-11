package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetachElasticLoadBalancerRequest {
    @JsonProperty("ElasticLoadBalancerName")
    public String elasticLoadBalancerName;
    public DetachElasticLoadBalancerRequest withElasticLoadBalancerName(String elasticLoadBalancerName) {
        this.elasticLoadBalancerName = elasticLoadBalancerName;
        return this;
    }
    @JsonProperty("LayerId")
    public String layerId;
    public DetachElasticLoadBalancerRequest withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
}