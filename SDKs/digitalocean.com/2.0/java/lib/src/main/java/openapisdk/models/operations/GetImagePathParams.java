package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=image_id")
    public Object imageId;
    public GetImagePathParams withImageId(Object imageId) {
        this.imageId = imageId;
        return this;
    }
}