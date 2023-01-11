package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateIdentityProviderResponse {
    @JsonProperty("IdentityProvider")
    public IdentityProviderType identityProvider;
    public UpdateIdentityProviderResponse withIdentityProvider(IdentityProviderType identityProvider) {
        this.identityProvider = identityProvider;
        return this;
    }
}