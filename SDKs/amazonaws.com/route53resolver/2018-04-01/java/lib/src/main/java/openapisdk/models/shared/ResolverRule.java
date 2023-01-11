package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResolverRule
 * For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html">DeleteResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request.
**/
public class ResolverRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public ResolverRule withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationTime")
    public String creationTime;
    public ResolverRule withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatorRequestId")
    public String creatorRequestId;
    public ResolverRule withCreatorRequestId(String creatorRequestId) {
        this.creatorRequestId = creatorRequestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainName")
    public String domainName;
    public ResolverRule withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ResolverRule withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModificationTime")
    public String modificationTime;
    public ResolverRule withModificationTime(String modificationTime) {
        this.modificationTime = modificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ResolverRule withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerId")
    public String ownerId;
    public ResolverRule withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverEndpointId")
    public String resolverEndpointId;
    public ResolverRule withResolverEndpointId(String resolverEndpointId) {
        this.resolverEndpointId = resolverEndpointId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleType")
    public RuleTypeOptionEnum ruleType;
    public ResolverRule withRuleType(RuleTypeOptionEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareStatus")
    public ShareStatusEnum shareStatus;
    public ResolverRule withShareStatus(ShareStatusEnum shareStatus) {
        this.shareStatus = shareStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ResolverRuleStatusEnum status;
    public ResolverRule withStatus(ResolverRuleStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusMessage")
    public String statusMessage;
    public ResolverRule withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetIps")
    public TargetAddress[] targetIps;
    public ResolverRule withTargetIps(TargetAddress[] targetIps) {
        this.targetIps = targetIps;
        return this;
    }
}