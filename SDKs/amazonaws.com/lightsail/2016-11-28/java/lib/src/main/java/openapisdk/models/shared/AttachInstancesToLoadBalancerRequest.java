package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AttachInstancesToLoadBalancerRequest {
    @JsonProperty("instanceNames")
    public String[] instanceNames;
    public AttachInstancesToLoadBalancerRequest withInstanceNames(String[] instanceNames) {
        this.instanceNames = instanceNames;
        return this;
    }
    @JsonProperty("loadBalancerName")
    public String loadBalancerName;
    public AttachInstancesToLoadBalancerRequest withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
}