package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DestroyDropletPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public DestroyDropletPathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}