package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIdentityProviderRequest {
    public UpdateIdentityProviderHeaders headers;
    public UpdateIdentityProviderRequest withHeaders(UpdateIdentityProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateIdentityProviderRequest request;
    public UpdateIdentityProviderRequest withRequest(openapisdk.models.shared.UpdateIdentityProviderRequest request) {
        this.request = request;
        return this;
    }
}