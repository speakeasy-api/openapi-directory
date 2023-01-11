package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCodeSigningConfigRequest {
    public CreateCodeSigningConfigHeaders headers;
    public CreateCodeSigningConfigRequest withHeaders(CreateCodeSigningConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateCodeSigningConfigRequestBody request;
    public CreateCodeSigningConfigRequest withRequest(CreateCodeSigningConfigRequestBody request) {
        this.request = request;
        return this;
    }
}