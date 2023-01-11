package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDimensionRequest {
    public UpdateDimensionPathParams pathParams;
    public UpdateDimensionRequest withPathParams(UpdateDimensionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDimensionHeaders headers;
    public UpdateDimensionRequest withHeaders(UpdateDimensionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDimensionRequestBody request;
    public UpdateDimensionRequest withRequest(UpdateDimensionRequestBody request) {
        this.request = request;
        return this;
    }
}