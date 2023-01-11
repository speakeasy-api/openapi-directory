package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancerRequest {
    @JsonProperty("loadBalancerName")
    public String loadBalancerName;
    public GetLoadBalancerRequest withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
}