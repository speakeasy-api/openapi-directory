package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFirewallDropletsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firewall_id")
    public String firewallId;
    public AddFirewallDropletsPathParams withFirewallId(String firewallId) {
        this.firewallId = firewallId;
        return this;
    }
}