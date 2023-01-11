package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDropletFirewallsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public ListDropletFirewallsPathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}