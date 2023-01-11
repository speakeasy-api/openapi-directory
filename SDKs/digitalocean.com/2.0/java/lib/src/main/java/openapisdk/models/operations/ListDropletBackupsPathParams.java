package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDropletBackupsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public ListDropletBackupsPathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}