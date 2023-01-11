package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions
 * An object specifying sticky sessions settings for the load balancer.
**/
public class CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookie_name")
    public String cookieName;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions withCookieName(String cookieName) {
        this.cookieName = cookieName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookie_ttl_seconds")
    public Long cookieTtlSeconds;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions withCookieTtlSeconds(Long cookieTtlSeconds) {
        this.cookieTtlSeconds = cookieTtlSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum type;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions withType(CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum type) {
        this.type = type;
        return this;
    }
}