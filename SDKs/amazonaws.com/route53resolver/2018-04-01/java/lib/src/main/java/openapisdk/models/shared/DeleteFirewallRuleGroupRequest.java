package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFirewallRuleGroupRequest {
    @JsonProperty("FirewallRuleGroupId")
    public String firewallRuleGroupId;
    public DeleteFirewallRuleGroupRequest withFirewallRuleGroupId(String firewallRuleGroupId) {
        this.firewallRuleGroupId = firewallRuleGroupId;
        return this;
    }
}