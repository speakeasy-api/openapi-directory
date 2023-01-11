package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateFirewallRuleGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallRuleGroupAssociation")
    public FirewallRuleGroupAssociation firewallRuleGroupAssociation;
    public DisassociateFirewallRuleGroupResponse withFirewallRuleGroupAssociation(FirewallRuleGroupAssociation firewallRuleGroupAssociation) {
        this.firewallRuleGroupAssociation = firewallRuleGroupAssociation;
        return this;
    }
}