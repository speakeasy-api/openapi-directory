/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

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
    
    public UpdateFirewallPolicyChangeProtectionRequest(@JsonProperty("FirewallPolicyChangeProtection") Boolean firewallPolicyChangeProtection) {
        this.firewallPolicyChangeProtection = firewallPolicyChangeProtection;
  }
}
