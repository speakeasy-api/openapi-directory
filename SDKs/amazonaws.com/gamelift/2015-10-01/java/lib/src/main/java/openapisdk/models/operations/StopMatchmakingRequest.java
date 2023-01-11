package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopMatchmakingRequest {
    public StopMatchmakingHeaders headers;
    public StopMatchmakingRequest withHeaders(StopMatchmakingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopMatchmakingInput request;
    public StopMatchmakingRequest withRequest(openapisdk.models.shared.StopMatchmakingInput request) {
        this.request = request;
        return this;
    }
}