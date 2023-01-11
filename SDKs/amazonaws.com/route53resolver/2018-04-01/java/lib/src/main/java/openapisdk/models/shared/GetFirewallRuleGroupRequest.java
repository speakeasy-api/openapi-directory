package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallRuleGroupRequest {
    @JsonProperty("FirewallRuleGroupId")
    public String firewallRuleGroupId;
    public GetFirewallRuleGroupRequest withFirewallRuleGroupId(String firewallRuleGroupId) {
        this.firewallRuleGroupId = firewallRuleGroupId;
        return this;
    }
}