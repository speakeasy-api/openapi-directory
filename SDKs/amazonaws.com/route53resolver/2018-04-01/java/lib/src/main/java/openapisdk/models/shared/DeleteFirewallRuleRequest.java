package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFirewallRuleRequest {
    @JsonProperty("FirewallDomainListId")
    public String firewallDomainListId;
    public DeleteFirewallRuleRequest withFirewallDomainListId(String firewallDomainListId) {
        this.firewallDomainListId = firewallDomainListId;
        return this;
    }
    @JsonProperty("FirewallRuleGroupId")
    public String firewallRuleGroupId;
    public DeleteFirewallRuleRequest withFirewallRuleGroupId(String firewallRuleGroupId) {
        this.firewallRuleGroupId = firewallRuleGroupId;
        return this;
    }
}