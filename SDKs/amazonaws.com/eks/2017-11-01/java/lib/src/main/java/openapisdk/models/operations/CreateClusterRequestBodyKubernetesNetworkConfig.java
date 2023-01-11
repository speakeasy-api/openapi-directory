package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateClusterRequestBodyKubernetesNetworkConfig
 * The Kubernetes network configuration for the cluster.
**/
public class CreateClusterRequestBodyKubernetesNetworkConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceIpv4Cidr")
    public String serviceIpv4Cidr;
    public CreateClusterRequestBodyKubernetesNetworkConfig withServiceIpv4Cidr(String serviceIpv4Cidr) {
        this.serviceIpv4Cidr = serviceIpv4Cidr;
        return this;
    }
}