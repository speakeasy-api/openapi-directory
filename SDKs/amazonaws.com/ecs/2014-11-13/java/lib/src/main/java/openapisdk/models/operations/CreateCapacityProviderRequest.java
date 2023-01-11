package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCapacityProviderRequest {
    public CreateCapacityProviderHeaders headers;
    public CreateCapacityProviderRequest withHeaders(CreateCapacityProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCapacityProviderRequest request;
    public CreateCapacityProviderRequest withRequest(openapisdk.models.shared.CreateCapacityProviderRequest request) {
        this.request = request;
        return this;
    }
}