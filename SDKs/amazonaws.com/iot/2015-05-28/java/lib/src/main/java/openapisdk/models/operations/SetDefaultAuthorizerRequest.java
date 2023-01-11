package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetDefaultAuthorizerRequest {
    public SetDefaultAuthorizerHeaders headers;
    public SetDefaultAuthorizerRequest withHeaders(SetDefaultAuthorizerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SetDefaultAuthorizerRequestBody request;
    public SetDefaultAuthorizerRequest withRequest(SetDefaultAuthorizerRequestBody request) {
        this.request = request;
        return this;
    }
}