package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDropletNeighborsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public ListDropletNeighborsPathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}