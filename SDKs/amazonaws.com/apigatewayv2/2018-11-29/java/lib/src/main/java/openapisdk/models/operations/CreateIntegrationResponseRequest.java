package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIntegrationResponseRequest {
    public CreateIntegrationResponsePathParams pathParams;
    public CreateIntegrationResponseRequest withPathParams(CreateIntegrationResponsePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateIntegrationResponseHeaders headers;
    public CreateIntegrationResponseRequest withHeaders(CreateIntegrationResponseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateIntegrationResponseRequestBody request;
    public CreateIntegrationResponseRequest withRequest(CreateIntegrationResponseRequestBody request) {
        this.request = request;
        return this;
    }
}