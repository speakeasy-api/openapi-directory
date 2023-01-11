package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResolverRuleConfig
 * In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request, information about the changes that you want to make.
**/
public class ResolverRuleConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ResolverRuleConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverEndpointId")
    public String resolverEndpointId;
    public ResolverRuleConfig withResolverEndpointId(String resolverEndpointId) {
        this.resolverEndpointId = resolverEndpointId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetIps")
    public TargetAddress[] targetIps;
    public ResolverRuleConfig withTargetIps(TargetAddress[] targetIps) {
        this.targetIps = targetIps;
        return this;
    }
}