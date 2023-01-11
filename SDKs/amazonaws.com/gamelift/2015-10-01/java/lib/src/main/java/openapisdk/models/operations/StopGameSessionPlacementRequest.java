package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopGameSessionPlacementRequest {
    public StopGameSessionPlacementHeaders headers;
    public StopGameSessionPlacementRequest withHeaders(StopGameSessionPlacementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopGameSessionPlacementInput request;
    public StopGameSessionPlacementRequest withRequest(openapisdk.models.shared.StopGameSessionPlacementInput request) {
        this.request = request;
        return this;
    }
}