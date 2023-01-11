package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteIntegrationRequest {
    public DeleteIntegrationPathParams pathParams;
    public DeleteIntegrationRequest withPathParams(DeleteIntegrationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteIntegrationHeaders headers;
    public DeleteIntegrationRequest withHeaders(DeleteIntegrationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteIntegrationRequestBody request;
    public DeleteIntegrationRequest withRequest(DeleteIntegrationRequestBody request) {
        this.request = request;
        return this;
    }
}