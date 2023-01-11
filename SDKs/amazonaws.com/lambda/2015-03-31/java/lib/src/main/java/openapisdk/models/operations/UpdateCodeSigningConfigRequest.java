package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCodeSigningConfigRequest {
    public UpdateCodeSigningConfigPathParams pathParams;
    public UpdateCodeSigningConfigRequest withPathParams(UpdateCodeSigningConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateCodeSigningConfigHeaders headers;
    public UpdateCodeSigningConfigRequest withHeaders(UpdateCodeSigningConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateCodeSigningConfigRequestBody request;
    public UpdateCodeSigningConfigRequest withRequest(UpdateCodeSigningConfigRequestBody request) {
        this.request = request;
        return this;
    }
}