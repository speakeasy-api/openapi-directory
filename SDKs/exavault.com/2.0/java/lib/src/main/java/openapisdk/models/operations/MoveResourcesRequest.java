package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MoveResourcesRequest {
    public MoveResourcesHeaders headers;
    public MoveResourcesRequest withHeaders(MoveResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MoveResourcesMoveResourcesRequestBody request;
    public MoveResourcesRequest withRequest(MoveResourcesMoveResourcesRequestBody request) {
        this.request = request;
        return this;
    }
}