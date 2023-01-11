package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFirewallRuleGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallRuleGroup")
    public FirewallRuleGroup firewallRuleGroup;
    public GetFirewallRuleGroupResponse withFirewallRuleGroup(FirewallRuleGroup firewallRuleGroup) {
        this.firewallRuleGroup = firewallRuleGroup;
        return this;
    }
}