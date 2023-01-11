package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDropletActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=action_id")
    public Long actionId;
    public GetDropletActionPathParams withActionId(Long actionId) {
        this.actionId = actionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=droplet_id")
    public Long dropletId;
    public GetDropletActionPathParams withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
}