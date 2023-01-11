package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateResolverRuleRequest {
    @JsonProperty("CreatorRequestId")
    public String creatorRequestId;
    public CreateResolverRuleRequest withCreatorRequestId(String creatorRequestId) {
        this.creatorRequestId = creatorRequestId;
        return this;
    }
    @JsonProperty("DomainName")
    public String domainName;
    public CreateResolverRuleRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CreateResolverRuleRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverEndpointId")
    public String resolverEndpointId;
    public CreateResolverRuleRequest withResolverEndpointId(String resolverEndpointId) {
        this.resolverEndpointId = resolverEndpointId;
        return this;
    }
    @JsonProperty("RuleType")
    public RuleTypeOptionEnum ruleType;
    public CreateResolverRuleRequest withRuleType(RuleTypeOptionEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateResolverRuleRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetIps")
    public TargetAddress[] targetIps;
    public CreateResolverRuleRequest withTargetIps(TargetAddress[] targetIps) {
        this.targetIps = targetIps;
        return this;
    }
}