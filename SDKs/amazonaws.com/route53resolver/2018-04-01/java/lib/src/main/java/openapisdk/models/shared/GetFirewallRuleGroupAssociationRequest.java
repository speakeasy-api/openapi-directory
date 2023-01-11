package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallRuleGroupAssociationRequest {
    @JsonProperty("FirewallRuleGroupAssociationId")
    public String firewallRuleGroupAssociationId;
    public GetFirewallRuleGroupAssociationRequest withFirewallRuleGroupAssociationId(String firewallRuleGroupAssociationId) {
        this.firewallRuleGroupAssociationId = firewallRuleGroupAssociationId;
        return this;
    }
}