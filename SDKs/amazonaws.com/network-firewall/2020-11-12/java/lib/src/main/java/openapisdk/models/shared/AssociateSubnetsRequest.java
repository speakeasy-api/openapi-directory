package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateSubnetsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallArn")
    public String firewallArn;
    public AssociateSubnetsRequest withFirewallArn(String firewallArn) {
        this.firewallArn = firewallArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallName")
    public String firewallName;
    public AssociateSubnetsRequest withFirewallName(String firewallName) {
        this.firewallName = firewallName;
        return this;
    }
    @JsonProperty("SubnetMappings")
    public SubnetMapping[] subnetMappings;
    public AssociateSubnetsRequest withSubnetMappings(SubnetMapping[] subnetMappings) {
        this.subnetMappings = subnetMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateToken")
    public String updateToken;
    public AssociateSubnetsRequest withUpdateToken(String updateToken) {
        this.updateToken = updateToken;
        return this;
    }
}