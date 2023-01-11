package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFirewallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firewall_id")
    public String firewallId;
    public GetFirewallPathParams withFirewallId(String firewallId) {
        this.firewallId = firewallId;
        return this;
    }
}