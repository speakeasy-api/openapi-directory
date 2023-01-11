package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AttachElasticLoadBalancerRequest {
    @JsonProperty("ElasticLoadBalancerName")
    public String elasticLoadBalancerName;
    public AttachElasticLoadBalancerRequest withElasticLoadBalancerName(String elasticLoadBalancerName) {
        this.elasticLoadBalancerName = elasticLoadBalancerName;
        return this;
    }
    @JsonProperty("LayerId")
    public String layerId;
    public AttachElasticLoadBalancerRequest withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
}