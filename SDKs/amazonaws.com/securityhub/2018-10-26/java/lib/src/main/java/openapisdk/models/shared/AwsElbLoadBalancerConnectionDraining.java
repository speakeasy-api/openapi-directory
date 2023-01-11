package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElbLoadBalancerConnectionDraining
 * Contains information about the connection draining configuration for the load balancer.
**/
public class AwsElbLoadBalancerConnectionDraining {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public AwsElbLoadBalancerConnectionDraining withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timeout")
    public Long timeout;
    public AwsElbLoadBalancerConnectionDraining withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
}