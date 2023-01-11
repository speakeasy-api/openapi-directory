package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateFirewallConfigRequest {
    @JsonProperty("FirewallFailOpen")
    public FirewallFailOpenStatusEnum firewallFailOpen;
    public UpdateFirewallConfigRequest withFirewallFailOpen(FirewallFailOpenStatusEnum firewallFailOpen) {
        this.firewallFailOpen = firewallFailOpen;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public UpdateFirewallConfigRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}