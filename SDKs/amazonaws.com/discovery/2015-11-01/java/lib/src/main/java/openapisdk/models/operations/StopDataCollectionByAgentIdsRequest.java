package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopDataCollectionByAgentIdsRequest {
    public StopDataCollectionByAgentIdsHeaders headers;
    public StopDataCollectionByAgentIdsRequest withHeaders(StopDataCollectionByAgentIdsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopDataCollectionByAgentIdsRequest request;
    public StopDataCollectionByAgentIdsRequest withRequest(openapisdk.models.shared.StopDataCollectionByAgentIdsRequest request) {
        this.request = request;
        return this;
    }
}