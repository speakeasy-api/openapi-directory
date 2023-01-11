package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutFunctionCodeSigningConfigRequest {
    public PutFunctionCodeSigningConfigPathParams pathParams;
    public PutFunctionCodeSigningConfigRequest withPathParams(PutFunctionCodeSigningConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutFunctionCodeSigningConfigHeaders headers;
    public PutFunctionCodeSigningConfigRequest withHeaders(PutFunctionCodeSigningConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutFunctionCodeSigningConfigRequestBody request;
    public PutFunctionCodeSigningConfigRequest withRequest(PutFunctionCodeSigningConfigRequestBody request) {
        this.request = request;
        return this;
    }
}