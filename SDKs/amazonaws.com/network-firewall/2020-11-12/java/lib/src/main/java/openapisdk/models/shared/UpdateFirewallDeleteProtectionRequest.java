package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFirewallDeleteProtectionRequest {
    @JsonProperty("DeleteProtection")
    public Boolean deleteProtection;
    public UpdateFirewallDeleteProtectionRequest withDeleteProtection(Boolean deleteProtection) {
        this.deleteProtection = deleteProtection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallArn")
    public String firewallArn;
    public UpdateFirewallDeleteProtectionRequest withFirewallArn(String firewallArn) {
        this.firewallArn = firewallArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallName")
    public String firewallName;
    public UpdateFirewallDeleteProtectionRequest withFirewallName(String firewallName) {
        this.firewallName = firewallName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateToken")
    public String updateToken;
    public UpdateFirewallDeleteProtectionRequest withUpdateToken(String updateToken) {
        this.updateToken = updateToken;
        return this;
    }
}