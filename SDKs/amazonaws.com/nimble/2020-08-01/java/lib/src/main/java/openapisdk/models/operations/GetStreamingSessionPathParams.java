package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStreamingSessionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sessionId")
    public String sessionId;
    public GetStreamingSessionPathParams withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public GetStreamingSessionPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}