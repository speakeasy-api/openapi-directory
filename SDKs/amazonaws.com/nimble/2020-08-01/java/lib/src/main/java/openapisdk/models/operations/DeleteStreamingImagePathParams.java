package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStreamingImagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=streamingImageId")
    public String streamingImageId;
    public DeleteStreamingImagePathParams withStreamingImageId(String streamingImageId) {
        this.streamingImageId = streamingImageId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public DeleteStreamingImagePathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}