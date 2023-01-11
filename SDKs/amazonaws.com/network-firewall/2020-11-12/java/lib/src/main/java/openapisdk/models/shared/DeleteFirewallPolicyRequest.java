package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteFirewallPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallPolicyArn")
    public String firewallPolicyArn;
    public DeleteFirewallPolicyRequest withFirewallPolicyArn(String firewallPolicyArn) {
        this.firewallPolicyArn = firewallPolicyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallPolicyName")
    public String firewallPolicyName;
    public DeleteFirewallPolicyRequest withFirewallPolicyName(String firewallPolicyName) {
        this.firewallPolicyName = firewallPolicyName;
        return this;
    }
}