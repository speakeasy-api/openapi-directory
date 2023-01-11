package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancersResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loadBalancers")
    public LoadBalancer[] loadBalancers;
    public GetLoadBalancersResult withLoadBalancers(LoadBalancer[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetLoadBalancersResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}