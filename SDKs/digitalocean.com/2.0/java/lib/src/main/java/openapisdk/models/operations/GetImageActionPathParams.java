package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=action_id")
    public Long actionId;
    public GetImageActionPathParams withActionId(Long actionId) {
        this.actionId = actionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=image_id")
    public Long imageId;
    public GetImageActionPathParams withImageId(Long imageId) {
        this.imageId = imageId;
        return this;
    }
}