package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElbLoadBalancerCrossZoneLoadBalancing
 * Contains cross-zone load balancing settings for the load balancer.
**/
public class AwsElbLoadBalancerCrossZoneLoadBalancing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public AwsElbLoadBalancerCrossZoneLoadBalancing withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}