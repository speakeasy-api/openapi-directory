package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListImageActionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=image_id")
    public Long imageId;
    public ListImageActionsPathParams withImageId(Long imageId) {
        this.imageId = imageId;
        return this;
    }
}