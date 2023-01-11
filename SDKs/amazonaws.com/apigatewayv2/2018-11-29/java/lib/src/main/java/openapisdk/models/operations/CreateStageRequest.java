package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStageRequest {
    public CreateStagePathParams pathParams;
    public CreateStageRequest withPathParams(CreateStagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateStageHeaders headers;
    public CreateStageRequest withHeaders(CreateStageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateStageRequestBody request;
    public CreateStageRequest withRequest(CreateStageRequestBody request) {
        this.request = request;
        return this;
    }
}