package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetIdentityProviderByIdentifierResponse {
    @JsonProperty("IdentityProvider")
    public IdentityProviderType identityProvider;
    public GetIdentityProviderByIdentifierResponse withIdentityProvider(IdentityProviderType identityProvider) {
        this.identityProvider = identityProvider;
        return this;
    }
}