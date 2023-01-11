package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStreamingImagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=streamingImageId")
    public String streamingImageId;
    public GetStreamingImagePathParams withStreamingImageId(String streamingImageId) {
        this.streamingImageId = streamingImageId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public GetStreamingImagePathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}