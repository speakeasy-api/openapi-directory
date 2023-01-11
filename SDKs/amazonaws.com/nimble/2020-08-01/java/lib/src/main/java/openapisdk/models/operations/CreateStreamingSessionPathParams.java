package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingSessionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public CreateStreamingSessionPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}