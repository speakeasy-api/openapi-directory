package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFirewallRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firewall_id")
    public String firewallId;
    public AddFirewallRulesPathParams withFirewallId(String firewallId) {
        this.firewallId = firewallId;
        return this;
    }
}