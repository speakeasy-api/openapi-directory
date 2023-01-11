package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDropletKernelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public ListDropletKernelsPathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}