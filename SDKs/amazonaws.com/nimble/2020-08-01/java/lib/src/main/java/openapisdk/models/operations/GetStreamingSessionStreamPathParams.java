package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStreamingSessionStreamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sessionId")
    public String sessionId;
    public GetStreamingSessionStreamPathParams withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=streamId")
    public String streamId;
    public GetStreamingSessionStreamPathParams withStreamId(String streamId) {
        this.streamId = streamId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public GetStreamingSessionStreamPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}