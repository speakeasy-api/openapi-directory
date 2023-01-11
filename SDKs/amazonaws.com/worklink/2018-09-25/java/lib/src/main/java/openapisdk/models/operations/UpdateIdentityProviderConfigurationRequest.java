package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIdentityProviderConfigurationRequest {
    public UpdateIdentityProviderConfigurationHeaders headers;
    public UpdateIdentityProviderConfigurationRequest withHeaders(UpdateIdentityProviderConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateIdentityProviderConfigurationRequestBody request;
    public UpdateIdentityProviderConfigurationRequest withRequest(UpdateIdentityProviderConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}