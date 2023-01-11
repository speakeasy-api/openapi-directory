package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingSessionStreamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sessionId")
    public String sessionId;
    public CreateStreamingSessionStreamPathParams withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public CreateStreamingSessionStreamPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}