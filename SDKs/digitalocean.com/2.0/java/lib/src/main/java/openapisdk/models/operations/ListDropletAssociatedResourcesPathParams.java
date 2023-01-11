package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDropletAssociatedResourcesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public ListDropletAssociatedResourcesPathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}