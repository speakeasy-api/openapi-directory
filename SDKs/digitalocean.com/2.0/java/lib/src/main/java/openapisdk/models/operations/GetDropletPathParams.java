package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDropletPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public GetDropletPathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}