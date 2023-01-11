package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEventIntegrationRequest {
    public CreateEventIntegrationHeaders headers;
    public CreateEventIntegrationRequest withHeaders(CreateEventIntegrationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateEventIntegrationRequestBody request;
    public CreateEventIntegrationRequest withRequest(CreateEventIntegrationRequestBody request) {
        this.request = request;
        return this;
    }
}