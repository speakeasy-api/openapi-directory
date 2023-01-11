package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIntegrationResponseRequest {
    public UpdateIntegrationResponsePathParams pathParams;
    public UpdateIntegrationResponseRequest withPathParams(UpdateIntegrationResponsePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateIntegrationResponseHeaders headers;
    public UpdateIntegrationResponseRequest withHeaders(UpdateIntegrationResponseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateIntegrationResponseRequestBody request;
    public UpdateIntegrationResponseRequest withRequest(UpdateIntegrationResponseRequestBody request) {
        this.request = request;
        return this;
    }
}