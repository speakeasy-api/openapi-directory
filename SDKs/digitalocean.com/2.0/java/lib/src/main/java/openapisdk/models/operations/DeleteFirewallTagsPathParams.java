package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFirewallTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firewall_id")
    public String firewallId;
    public DeleteFirewallTagsPathParams withFirewallId(String firewallId) {
        this.firewallId = firewallId;
        return this;
    }
}