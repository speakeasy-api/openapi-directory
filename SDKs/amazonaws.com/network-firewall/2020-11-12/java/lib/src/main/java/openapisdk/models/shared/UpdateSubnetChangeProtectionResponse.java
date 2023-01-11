package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSubnetChangeProtectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallArn")
    public String firewallArn;
    public UpdateSubnetChangeProtectionResponse withFirewallArn(String firewallArn) {
        this.firewallArn = firewallArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallName")
    public String firewallName;
    public UpdateSubnetChangeProtectionResponse withFirewallName(String firewallName) {
        this.firewallName = firewallName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetChangeProtection")
    public Boolean subnetChangeProtection;
    public UpdateSubnetChangeProtectionResponse withSubnetChangeProtection(Boolean subnetChangeProtection) {
        this.subnetChangeProtection = subnetChangeProtection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateToken")
    public String updateToken;
    public UpdateSubnetChangeProtectionResponse withUpdateToken(String updateToken) {
        this.updateToken = updateToken;
        return this;
    }
}