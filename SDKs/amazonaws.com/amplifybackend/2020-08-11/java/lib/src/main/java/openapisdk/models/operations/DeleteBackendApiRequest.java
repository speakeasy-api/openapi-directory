package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBackendApiRequest {
    public DeleteBackendApiPathParams pathParams;
    public DeleteBackendApiRequest withPathParams(DeleteBackendApiPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteBackendApiHeaders headers;
    public DeleteBackendApiRequest withHeaders(DeleteBackendApiHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteBackendApiRequestBody request;
    public DeleteBackendApiRequest withRequest(DeleteBackendApiRequestBody request) {
        this.request = request;
        return this;
    }
}