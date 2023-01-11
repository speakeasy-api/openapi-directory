package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=image_id")
    public Long imageId;
    public DeleteImagePathParams withImageId(Long imageId) {
        this.imageId = imageId;
        return this;
    }
}