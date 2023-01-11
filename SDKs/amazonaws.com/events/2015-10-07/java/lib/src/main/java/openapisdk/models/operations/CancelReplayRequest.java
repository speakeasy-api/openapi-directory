package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelReplayRequest {
    public CancelReplayHeaders headers;
    public CancelReplayRequest withHeaders(CancelReplayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelReplayRequest request;
    public CancelReplayRequest withRequest(openapisdk.models.shared.CancelReplayRequest request) {
        this.request = request;
        return this;
    }
}