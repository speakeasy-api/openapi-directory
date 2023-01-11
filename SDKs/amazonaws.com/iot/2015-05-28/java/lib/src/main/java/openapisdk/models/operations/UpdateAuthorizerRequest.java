package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAuthorizerRequest {
    public UpdateAuthorizerPathParams pathParams;
    public UpdateAuthorizerRequest withPathParams(UpdateAuthorizerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAuthorizerHeaders headers;
    public UpdateAuthorizerRequest withHeaders(UpdateAuthorizerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAuthorizerRequestBody request;
    public UpdateAuthorizerRequest withRequest(UpdateAuthorizerRequestBody request) {
        this.request = request;
        return this;
    }
}