package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartGameSessionPlacementRequest {
    public StartGameSessionPlacementHeaders headers;
    public StartGameSessionPlacementRequest withHeaders(StartGameSessionPlacementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartGameSessionPlacementInput request;
    public StartGameSessionPlacementRequest withRequest(openapisdk.models.shared.StartGameSessionPlacementInput request) {
        this.request = request;
        return this;
    }
}