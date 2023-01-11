package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAuthorizerRequest {
    public CreateAuthorizerPathParams pathParams;
    public CreateAuthorizerRequest withPathParams(CreateAuthorizerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateAuthorizerHeaders headers;
    public CreateAuthorizerRequest withHeaders(CreateAuthorizerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAuthorizerRequestBody request;
    public CreateAuthorizerRequest withRequest(CreateAuthorizerRequestBody request) {
        this.request = request;
        return this;
    }
}