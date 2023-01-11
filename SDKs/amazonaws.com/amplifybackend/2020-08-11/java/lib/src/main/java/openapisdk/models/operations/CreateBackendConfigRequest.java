package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBackendConfigRequest {
    public CreateBackendConfigPathParams pathParams;
    public CreateBackendConfigRequest withPathParams(CreateBackendConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateBackendConfigHeaders headers;
    public CreateBackendConfigRequest withHeaders(CreateBackendConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateBackendConfigRequestBody request;
    public CreateBackendConfigRequest withRequest(CreateBackendConfigRequestBody request) {
        this.request = request;
        return this;
    }
}