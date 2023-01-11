package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDropletActionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public ListDropletActionsPathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}