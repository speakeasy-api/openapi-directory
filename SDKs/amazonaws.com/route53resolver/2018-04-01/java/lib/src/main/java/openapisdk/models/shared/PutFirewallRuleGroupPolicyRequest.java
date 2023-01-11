package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutFirewallRuleGroupPolicyRequest {
    @JsonProperty("Arn")
    public String arn;
    public PutFirewallRuleGroupPolicyRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("FirewallRuleGroupPolicy")
    public String firewallRuleGroupPolicy;
    public PutFirewallRuleGroupPolicyRequest withFirewallRuleGroupPolicy(String firewallRuleGroupPolicy) {
        this.firewallRuleGroupPolicy = firewallRuleGroupPolicy;
        return this;
    }
}