package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBackendAuthRequest {
    public CreateBackendAuthPathParams pathParams;
    public CreateBackendAuthRequest withPathParams(CreateBackendAuthPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateBackendAuthHeaders headers;
    public CreateBackendAuthRequest withHeaders(CreateBackendAuthHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateBackendAuthRequestBody request;
    public CreateBackendAuthRequest withRequest(CreateBackendAuthRequestBody request) {
        this.request = request;
        return this;
    }
}