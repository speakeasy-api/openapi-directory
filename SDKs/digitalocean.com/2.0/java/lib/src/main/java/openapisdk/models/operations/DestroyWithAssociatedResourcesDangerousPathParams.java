package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DestroyWithAssociatedResourcesDangerousPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public DestroyWithAssociatedResourcesDangerousPathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}