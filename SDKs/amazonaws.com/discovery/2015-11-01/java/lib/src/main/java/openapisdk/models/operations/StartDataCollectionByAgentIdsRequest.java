package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartDataCollectionByAgentIdsRequest {
    public StartDataCollectionByAgentIdsHeaders headers;
    public StartDataCollectionByAgentIdsRequest withHeaders(StartDataCollectionByAgentIdsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartDataCollectionByAgentIdsRequest request;
    public StartDataCollectionByAgentIdsRequest withRequest(openapisdk.models.shared.StartDataCollectionByAgentIdsRequest request) {
        this.request = request;
        return this;
    }
}