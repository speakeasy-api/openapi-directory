package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancerTlsCertificatesRequest {
    @JsonProperty("loadBalancerName")
    public String loadBalancerName;
    public GetLoadBalancerTlsCertificatesRequest withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
}