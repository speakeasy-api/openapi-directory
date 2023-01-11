package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStreamingImagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public ListStreamingImagesPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}