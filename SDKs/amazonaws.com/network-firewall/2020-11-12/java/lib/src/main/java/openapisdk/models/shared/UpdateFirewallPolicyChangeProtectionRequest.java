package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFirewallPolicyChangeProtectionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallArn")
    public String firewallArn;
    public UpdateFirewallPolicyChangeProtectionRequest withFirewallArn(String firewallArn) {
        this.firewallArn = firewallArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallName")
    public String firewallName;
    public UpdateFirewallPolicyChangeProtectionRequest withFirewallName(String firewallName) {
        this.firewallName = firewallName;
        return this;
    }
    @JsonProperty("FirewallPolicyChangeProtection")
    public Boolean firewallPolicyChangeProtection;
    public UpdateFirewallPolicyChangeProtectionRequest withFirewallPolicyChangeProtection(Boolean firewallPolicyChangeProtection) {
        this.firewallPolicyChangeProtection = firewallPolicyChangeProtection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateToken")
    public String updateToken;
    public UpdateFirewallPolicyChangeProtectionRequest withUpdateToken(String updateToken) {
        this.updateToken = updateToken;
        return this;
    }
}