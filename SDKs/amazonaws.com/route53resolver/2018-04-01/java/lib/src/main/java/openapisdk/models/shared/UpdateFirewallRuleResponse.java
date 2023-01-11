package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFirewallRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallRule")
    public FirewallRule firewallRule;
    public UpdateFirewallRuleResponse withFirewallRule(FirewallRule firewallRule) {
        this.firewallRule = firewallRule;
        return this;
    }
}