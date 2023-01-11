package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetryDestroyWithAssociatedResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public RetryDestroyWithAssociatedResourcePathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}