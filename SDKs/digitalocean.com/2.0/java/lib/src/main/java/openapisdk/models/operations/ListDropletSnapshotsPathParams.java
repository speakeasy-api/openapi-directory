package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDropletSnapshotsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public ListDropletSnapshotsPathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}