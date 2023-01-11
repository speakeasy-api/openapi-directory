package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDimensionRequest {
    public CreateDimensionPathParams pathParams;
    public CreateDimensionRequest withPathParams(CreateDimensionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateDimensionHeaders headers;
    public CreateDimensionRequest withHeaders(CreateDimensionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDimensionRequestBody request;
    public CreateDimensionRequest withRequest(CreateDimensionRequestBody request) {
        this.request = request;
        return this;
    }
}