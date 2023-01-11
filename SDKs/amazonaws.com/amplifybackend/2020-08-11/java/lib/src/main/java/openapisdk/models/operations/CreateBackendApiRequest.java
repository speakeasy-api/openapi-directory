package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBackendApiRequest {
    public CreateBackendApiPathParams pathParams;
    public CreateBackendApiRequest withPathParams(CreateBackendApiPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateBackendApiHeaders headers;
    public CreateBackendApiRequest withHeaders(CreateBackendApiHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateBackendApiRequestBody request;
    public CreateBackendApiRequest withRequest(CreateBackendApiRequestBody request) {
        this.request = request;
        return this;
    }
}