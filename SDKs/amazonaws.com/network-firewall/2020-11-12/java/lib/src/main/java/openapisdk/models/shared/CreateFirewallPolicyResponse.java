package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateFirewallPolicyResponse {
    @JsonProperty("FirewallPolicyResponse")
    public FirewallPolicyResponse firewallPolicyResponse;
    public CreateFirewallPolicyResponse withFirewallPolicyResponse(FirewallPolicyResponse firewallPolicyResponse) {
        this.firewallPolicyResponse = firewallPolicyResponse;
        return this;
    }
    @JsonProperty("UpdateToken")
    public String updateToken;
    public CreateFirewallPolicyResponse withUpdateToken(String updateToken) {
        this.updateToken = updateToken;
        return this;
    }
}