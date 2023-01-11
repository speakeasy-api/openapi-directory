package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetachInstancesFromLoadBalancerRequest {
    @JsonProperty("instanceNames")
    public String[] instanceNames;
    public DetachInstancesFromLoadBalancerRequest withInstanceNames(String[] instanceNames) {
        this.instanceNames = instanceNames;
        return this;
    }
    @JsonProperty("loadBalancerName")
    public String loadBalancerName;
    public DetachInstancesFromLoadBalancerRequest withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
}