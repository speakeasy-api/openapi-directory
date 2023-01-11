package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFirewallDropletsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firewall_id")
    public String firewallId;
    public DeleteFirewallDropletsPathParams withFirewallId(String firewallId) {
        this.firewallId = firewallId;
        return this;
    }
}