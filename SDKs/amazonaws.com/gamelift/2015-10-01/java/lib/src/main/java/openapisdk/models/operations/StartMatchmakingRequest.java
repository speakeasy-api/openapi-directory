package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartMatchmakingRequest {
    public StartMatchmakingHeaders headers;
    public StartMatchmakingRequest withHeaders(StartMatchmakingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartMatchmakingInput request;
    public StartMatchmakingRequest withRequest(openapisdk.models.shared.StartMatchmakingInput request) {
        this.request = request;
        return this;
    }
}