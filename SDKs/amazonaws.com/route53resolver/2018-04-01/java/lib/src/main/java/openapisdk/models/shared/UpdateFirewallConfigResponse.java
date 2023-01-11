package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFirewallConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallConfig")
    public FirewallConfig firewallConfig;
    public UpdateFirewallConfigResponse withFirewallConfig(FirewallConfig firewallConfig) {
        this.firewallConfig = firewallConfig;
        return this;
    }
}