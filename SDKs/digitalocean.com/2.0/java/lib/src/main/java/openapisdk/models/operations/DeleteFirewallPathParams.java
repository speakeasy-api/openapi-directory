package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFirewallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firewall_id")
    public String firewallId;
    public DeleteFirewallPathParams withFirewallId(String firewallId) {
        this.firewallId = firewallId;
        return this;
    }
}