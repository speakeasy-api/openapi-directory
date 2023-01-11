package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceIntegrationRequest {
    public UpdateServiceIntegrationHeaders headers;
    public UpdateServiceIntegrationRequest withHeaders(UpdateServiceIntegrationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateServiceIntegrationRequestBody request;
    public UpdateServiceIntegrationRequest withRequest(UpdateServiceIntegrationRequestBody request) {
        this.request = request;
        return this;
    }
}