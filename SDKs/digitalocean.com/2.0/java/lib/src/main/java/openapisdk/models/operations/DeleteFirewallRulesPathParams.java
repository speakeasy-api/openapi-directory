package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFirewallRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firewall_id")
    public String firewallId;
    public DeleteFirewallRulesPathParams withFirewallId(String firewallId) {
        this.firewallId = firewallId;
        return this;
    }
}