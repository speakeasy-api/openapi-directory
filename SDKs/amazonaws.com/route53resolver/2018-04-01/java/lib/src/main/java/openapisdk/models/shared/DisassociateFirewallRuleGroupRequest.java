package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateFirewallRuleGroupRequest {
    @JsonProperty("FirewallRuleGroupAssociationId")
    public String firewallRuleGroupAssociationId;
    public DisassociateFirewallRuleGroupRequest withFirewallRuleGroupAssociationId(String firewallRuleGroupAssociationId) {
        this.firewallRuleGroupAssociationId = firewallRuleGroupAssociationId;
        return this;
    }
}