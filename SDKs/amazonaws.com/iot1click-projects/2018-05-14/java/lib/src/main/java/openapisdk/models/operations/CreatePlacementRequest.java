package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePlacementRequest {
    public CreatePlacementPathParams pathParams;
    public CreatePlacementRequest withPathParams(CreatePlacementPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreatePlacementHeaders headers;
    public CreatePlacementRequest withHeaders(CreatePlacementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreatePlacementRequestBody request;
    public CreatePlacementRequest withRequest(CreatePlacementRequestBody request) {
        this.request = request;
        return this;
    }
}