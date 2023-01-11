package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFirewallPolicyResponse {
    @JsonProperty("FirewallPolicyResponse")
    public FirewallPolicyResponse firewallPolicyResponse;
    public DeleteFirewallPolicyResponse withFirewallPolicyResponse(FirewallPolicyResponse firewallPolicyResponse) {
        this.firewallPolicyResponse = firewallPolicyResponse;
        return this;
    }
}