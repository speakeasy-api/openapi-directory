package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KubernetesNetworkConfigResponse
 * The Kubernetes network configuration for the cluster.
**/
public class KubernetesNetworkConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceIpv4Cidr")
    public String serviceIpv4Cidr;
    public KubernetesNetworkConfigResponse withServiceIpv4Cidr(String serviceIpv4Cidr) {
        this.serviceIpv4Cidr = serviceIpv4Cidr;
        return this;
    }
}