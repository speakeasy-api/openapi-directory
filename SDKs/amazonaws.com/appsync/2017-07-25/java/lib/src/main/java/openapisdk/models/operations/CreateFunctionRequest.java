package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFunctionRequest {
    public CreateFunctionPathParams pathParams;
    public CreateFunctionRequest withPathParams(CreateFunctionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateFunctionHeaders headers;
    public CreateFunctionRequest withHeaders(CreateFunctionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateFunctionRequestBody request;
    public CreateFunctionRequest withRequest(CreateFunctionRequestBody request) {
        this.request = request;
        return this;
    }
}