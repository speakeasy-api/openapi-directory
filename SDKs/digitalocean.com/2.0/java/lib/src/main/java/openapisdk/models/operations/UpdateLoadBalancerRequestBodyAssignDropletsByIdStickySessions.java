package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions
 * An object specifying sticky sessions settings for the load balancer.
**/
public class UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookie_name")
    public String cookieName;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions withCookieName(String cookieName) {
        this.cookieName = cookieName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookie_ttl_seconds")
    public Long cookieTtlSeconds;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions withCookieTtlSeconds(Long cookieTtlSeconds) {
        this.cookieTtlSeconds = cookieTtlSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum type;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions withType(UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum type) {
        this.type = type;
        return this;
    }
}