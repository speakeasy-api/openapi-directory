package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLoadBalancerRequest {
    @JsonProperty("loadBalancerName")
    public String loadBalancerName;
    public DeleteLoadBalancerRequest withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
}