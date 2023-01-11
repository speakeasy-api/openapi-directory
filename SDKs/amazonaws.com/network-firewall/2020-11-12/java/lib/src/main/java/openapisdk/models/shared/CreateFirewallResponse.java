package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFirewallResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Firewall")
    public Firewall firewall;
    public CreateFirewallResponse withFirewall(Firewall firewall) {
        this.firewall = firewall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallStatus")
    public FirewallStatus firewallStatus;
    public CreateFirewallResponse withFirewallStatus(FirewallStatus firewallStatus) {
        this.firewallStatus = firewallStatus;
        return this;
    }
}