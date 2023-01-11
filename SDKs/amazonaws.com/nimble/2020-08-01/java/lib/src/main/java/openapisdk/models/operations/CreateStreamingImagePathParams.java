package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingImagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public CreateStreamingImagePathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}