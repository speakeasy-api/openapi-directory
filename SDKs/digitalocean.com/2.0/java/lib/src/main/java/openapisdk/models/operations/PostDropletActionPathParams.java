package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDropletActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public PostDropletActionPathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}