package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDestroyWithAssociatedResourcesStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public GetDestroyWithAssociatedResourcesStatusPathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}