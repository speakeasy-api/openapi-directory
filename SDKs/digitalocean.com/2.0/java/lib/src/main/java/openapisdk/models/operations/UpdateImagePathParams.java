package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateImagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=image_id")
    public Long imageId;
    public UpdateImagePathParams withImageId(Long imageId) {
        this.imageId = imageId;
        return this;
    }
}