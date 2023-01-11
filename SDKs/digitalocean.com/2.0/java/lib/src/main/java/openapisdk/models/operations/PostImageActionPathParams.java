package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImageActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=image_id")
    public Long imageId;
    public PostImageActionPathParams withImageId(Long imageId) {
        this.imageId = imageId;
        return this;
    }
}