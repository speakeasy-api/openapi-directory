package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFirewallRuleGroupPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallRuleGroupPolicy")
    public String firewallRuleGroupPolicy;
    public GetFirewallRuleGroupPolicyResponse withFirewallRuleGroupPolicy(String firewallRuleGroupPolicy) {
        this.firewallRuleGroupPolicy = firewallRuleGroupPolicy;
        return this;
    }
}