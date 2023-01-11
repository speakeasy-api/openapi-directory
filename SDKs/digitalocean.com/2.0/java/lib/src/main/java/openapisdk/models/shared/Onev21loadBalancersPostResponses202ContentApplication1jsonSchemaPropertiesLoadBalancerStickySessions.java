package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions
 * An object specifying sticky sessions settings for the load balancer.
**/
public class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookie_name")
    public String cookieName;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions withCookieName(String cookieName) {
        this.cookieName = cookieName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookie_ttl_seconds")
    public Long cookieTtlSeconds;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions withCookieTtlSeconds(Long cookieTtlSeconds) {
        this.cookieTtlSeconds = cookieTtlSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum type;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions withType(Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum type) {
        this.type = type;
        return this;
    }
}