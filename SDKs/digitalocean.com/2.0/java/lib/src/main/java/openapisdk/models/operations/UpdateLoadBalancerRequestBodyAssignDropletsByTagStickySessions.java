package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions
 * An object specifying sticky sessions settings for the load balancer.
**/
public class UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookie_name")
    public String cookieName;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions withCookieName(String cookieName) {
        this.cookieName = cookieName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookie_ttl_seconds")
    public Long cookieTtlSeconds;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions withCookieTtlSeconds(Long cookieTtlSeconds) {
        this.cookieTtlSeconds = cookieTtlSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum type;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions withType(UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum type) {
        this.type = type;
        return this;
    }
}