package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResolverRuleAssociation
 * In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a> request, provides information about an association between a Resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network. 
**/
public class ResolverRuleAssociation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ResolverRuleAssociation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ResolverRuleAssociation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverRuleId")
    public String resolverRuleId;
    public ResolverRuleAssociation withResolverRuleId(String resolverRuleId) {
        this.resolverRuleId = resolverRuleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ResolverRuleAssociationStatusEnum status;
    public ResolverRuleAssociation withStatus(ResolverRuleAssociationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusMessage")
    public String statusMessage;
    public ResolverRuleAssociation withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VPCId")
    public String vpcId;
    public ResolverRuleAssociation withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}