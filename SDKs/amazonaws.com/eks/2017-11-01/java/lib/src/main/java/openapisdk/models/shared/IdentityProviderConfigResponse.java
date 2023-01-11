package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityProviderConfigResponse
 * The full description of your identity configuration.
**/
public class IdentityProviderConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oidc")
    public OidcIdentityProviderConfig oidc;
    public IdentityProviderConfigResponse withOidc(OidcIdentityProviderConfig oidc) {
        this.oidc = oidc;
        return this;
    }
}