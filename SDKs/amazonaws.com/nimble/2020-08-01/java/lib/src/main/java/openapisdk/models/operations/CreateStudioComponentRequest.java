package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStudioComponentRequest {
    public CreateStudioComponentPathParams pathParams;
    public CreateStudioComponentRequest withPathParams(CreateStudioComponentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateStudioComponentHeaders headers;
    public CreateStudioComponentRequest withHeaders(CreateStudioComponentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateStudioComponentRequestBody request;
    public CreateStudioComponentRequest withRequest(CreateStudioComponentRequestBody request) {
        this.request = request;
        return this;
    }
}