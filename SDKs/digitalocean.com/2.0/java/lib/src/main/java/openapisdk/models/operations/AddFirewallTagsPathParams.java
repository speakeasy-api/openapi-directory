package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFirewallTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firewall_id")
    public String firewallId;
    public AddFirewallTagsPathParams withFirewallId(String firewallId) {
        this.firewallId = firewallId;
        return this;
    }
}