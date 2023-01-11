package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBackendEnvironmentRequest {
    public CreateBackendEnvironmentPathParams pathParams;
    public CreateBackendEnvironmentRequest withPathParams(CreateBackendEnvironmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateBackendEnvironmentHeaders headers;
    public CreateBackendEnvironmentRequest withHeaders(CreateBackendEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateBackendEnvironmentRequestBody request;
    public CreateBackendEnvironmentRequest withRequest(CreateBackendEnvironmentRequestBody request) {
        this.request = request;
        return this;
    }
}