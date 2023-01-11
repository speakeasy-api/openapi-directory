package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateFirewallPolicyResponse {
    @JsonProperty("FirewallPolicyResponse")
    public FirewallPolicyResponse firewallPolicyResponse;
    public UpdateFirewallPolicyResponse withFirewallPolicyResponse(FirewallPolicyResponse firewallPolicyResponse) {
        this.firewallPolicyResponse = firewallPolicyResponse;
        return this;
    }
    @JsonProperty("UpdateToken")
    public String updateToken;
    public UpdateFirewallPolicyResponse withUpdateToken(String updateToken) {
        this.updateToken = updateToken;
        return this;
    }
}