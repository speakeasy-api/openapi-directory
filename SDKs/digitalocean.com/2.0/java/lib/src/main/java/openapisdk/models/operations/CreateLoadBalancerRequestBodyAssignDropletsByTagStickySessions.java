package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions
 * An object specifying sticky sessions settings for the load balancer.
**/
public class CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookie_name")
    public String cookieName;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions withCookieName(String cookieName) {
        this.cookieName = cookieName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookie_ttl_seconds")
    public Long cookieTtlSeconds;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions withCookieTtlSeconds(Long cookieTtlSeconds) {
        this.cookieTtlSeconds = cookieTtlSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum type;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions withType(CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum type) {
        this.type = type;
        return this;
    }
}