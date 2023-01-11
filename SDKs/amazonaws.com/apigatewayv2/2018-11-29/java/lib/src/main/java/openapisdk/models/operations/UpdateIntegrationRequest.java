package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIntegrationRequest {
    public UpdateIntegrationPathParams pathParams;
    public UpdateIntegrationRequest withPathParams(UpdateIntegrationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateIntegrationHeaders headers;
    public UpdateIntegrationRequest withHeaders(UpdateIntegrationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateIntegrationRequestBody request;
    public UpdateIntegrationRequest withRequest(UpdateIntegrationRequestBody request) {
        this.request = request;
        return this;
    }
}