package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteFirewallRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallArn")
    public String firewallArn;
    public DeleteFirewallRequest withFirewallArn(String firewallArn) {
        this.firewallArn = firewallArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallName")
    public String firewallName;
    public DeleteFirewallRequest withFirewallName(String firewallName) {
        this.firewallName = firewallName;
        return this;
    }
}