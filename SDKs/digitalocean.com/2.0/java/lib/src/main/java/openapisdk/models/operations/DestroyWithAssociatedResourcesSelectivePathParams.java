package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DestroyWithAssociatedResourcesSelectivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public DestroyWithAssociatedResourcesSelectivePathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}