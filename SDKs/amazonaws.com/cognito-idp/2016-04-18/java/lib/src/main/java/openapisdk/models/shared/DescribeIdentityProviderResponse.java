package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeIdentityProviderResponse {
    @JsonProperty("IdentityProvider")
    public IdentityProviderType identityProvider;
    public DescribeIdentityProviderResponse withIdentityProvider(IdentityProviderType identityProvider) {
        this.identityProvider = identityProvider;
        return this;
    }
}