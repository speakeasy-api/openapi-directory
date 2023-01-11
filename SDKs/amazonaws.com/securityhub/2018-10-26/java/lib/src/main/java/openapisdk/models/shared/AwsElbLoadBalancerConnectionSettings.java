package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElbLoadBalancerConnectionSettings
 * Contains connection settings for the load balancer.
**/
public class AwsElbLoadBalancerConnectionSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdleTimeout")
    public Long idleTimeout;
    public AwsElbLoadBalancerConnectionSettings withIdleTimeout(Long idleTimeout) {
        this.idleTimeout = idleTimeout;
        return this;
    }
}