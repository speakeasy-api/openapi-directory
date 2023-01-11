package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteIdentityProviderRequest {
    public DeleteIdentityProviderHeaders headers;
    public DeleteIdentityProviderRequest withHeaders(DeleteIdentityProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteIdentityProviderRequest request;
    public DeleteIdentityProviderRequest withRequest(openapisdk.models.shared.DeleteIdentityProviderRequest request) {
        this.request = request;
        return this;
    }
}