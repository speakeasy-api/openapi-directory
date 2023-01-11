package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateFirewallRuleGroupRequest {
    @JsonProperty("CreatorRequestId")
    public String creatorRequestId;
    public AssociateFirewallRuleGroupRequest withCreatorRequestId(String creatorRequestId) {
        this.creatorRequestId = creatorRequestId;
        return this;
    }
    @JsonProperty("FirewallRuleGroupId")
    public String firewallRuleGroupId;
    public AssociateFirewallRuleGroupRequest withFirewallRuleGroupId(String firewallRuleGroupId) {
        this.firewallRuleGroupId = firewallRuleGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MutationProtection")
    public MutationProtectionStatusEnum mutationProtection;
    public AssociateFirewallRuleGroupRequest withMutationProtection(MutationProtectionStatusEnum mutationProtection) {
        this.mutationProtection = mutationProtection;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public AssociateFirewallRuleGroupRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Priority")
    public Long priority;
    public AssociateFirewallRuleGroupRequest withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public AssociateFirewallRuleGroupRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("VpcId")
    public String vpcId;
    public AssociateFirewallRuleGroupRequest withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}