package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFirewallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firewall_id")
    public String firewallId;
    public UpdateFirewallPathParams withFirewallId(String firewallId) {
        this.firewallId = firewallId;
        return this;
    }
}