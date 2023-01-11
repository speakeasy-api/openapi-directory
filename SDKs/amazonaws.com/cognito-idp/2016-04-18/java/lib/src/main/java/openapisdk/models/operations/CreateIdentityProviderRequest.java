package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIdentityProviderRequest {
    public CreateIdentityProviderHeaders headers;
    public CreateIdentityProviderRequest withHeaders(CreateIdentityProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateIdentityProviderRequest request;
    public CreateIdentityProviderRequest withRequest(openapisdk.models.shared.CreateIdentityProviderRequest request) {
        this.request = request;
        return this;
    }
}