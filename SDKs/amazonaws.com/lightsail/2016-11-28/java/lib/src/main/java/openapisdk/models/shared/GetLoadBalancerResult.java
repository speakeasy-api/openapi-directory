package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancerResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loadBalancer")
    public LoadBalancer loadBalancer;
    public GetLoadBalancerResult withLoadBalancer(LoadBalancer loadBalancer) {
        this.loadBalancer = loadBalancer;
        return this;
    }
}