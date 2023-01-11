package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartReplayRequest {
    public StartReplayHeaders headers;
    public StartReplayRequest withHeaders(StartReplayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartReplayRequest request;
    public StartReplayRequest withRequest(openapisdk.models.shared.StartReplayRequest request) {
        this.request = request;
        return this;
    }
}