package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateIdentityProviderResponse {
    @JsonProperty("IdentityProvider")
    public IdentityProviderType identityProvider;
    public CreateIdentityProviderResponse withIdentityProvider(IdentityProviderType identityProvider) {
        this.identityProvider = identityProvider;
        return this;
    }
}