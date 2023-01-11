package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElbLoadBalancerInstance
 * Provides information about an EC2 instance for a load balancer.
**/
public class AwsElbLoadBalancerInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public AwsElbLoadBalancerInstance withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}