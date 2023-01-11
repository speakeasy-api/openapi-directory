package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeFirewallPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallPolicyArn")
    public String firewallPolicyArn;
    public DescribeFirewallPolicyRequest withFirewallPolicyArn(String firewallPolicyArn) {
        this.firewallPolicyArn = firewallPolicyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallPolicyName")
    public String firewallPolicyName;
    public DescribeFirewallPolicyRequest withFirewallPolicyName(String firewallPolicyName) {
        this.firewallPolicyName = firewallPolicyName;
        return this;
    }
}