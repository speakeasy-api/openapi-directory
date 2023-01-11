package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeFirewallPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallPolicy")
    public FirewallPolicy firewallPolicy;
    public DescribeFirewallPolicyResponse withFirewallPolicy(FirewallPolicy firewallPolicy) {
        this.firewallPolicy = firewallPolicy;
        return this;
    }
    @JsonProperty("FirewallPolicyResponse")
    public FirewallPolicyResponse firewallPolicyResponse;
    public DescribeFirewallPolicyResponse withFirewallPolicyResponse(FirewallPolicyResponse firewallPolicyResponse) {
        this.firewallPolicyResponse = firewallPolicyResponse;
        return this;
    }
    @JsonProperty("UpdateToken")
    public String updateToken;
    public DescribeFirewallPolicyResponse withUpdateToken(String updateToken) {
        this.updateToken = updateToken;
        return this;
    }
}