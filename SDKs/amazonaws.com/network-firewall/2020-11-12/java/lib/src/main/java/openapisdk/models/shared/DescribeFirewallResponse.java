package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeFirewallResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Firewall")
    public Firewall firewall;
    public DescribeFirewallResponse withFirewall(Firewall firewall) {
        this.firewall = firewall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallStatus")
    public FirewallStatus firewallStatus;
    public DescribeFirewallResponse withFirewallStatus(FirewallStatus firewallStatus) {
        this.firewallStatus = firewallStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateToken")
    public String updateToken;
    public DescribeFirewallResponse withUpdateToken(String updateToken) {
        this.updateToken = updateToken;
        return this;
    }
}