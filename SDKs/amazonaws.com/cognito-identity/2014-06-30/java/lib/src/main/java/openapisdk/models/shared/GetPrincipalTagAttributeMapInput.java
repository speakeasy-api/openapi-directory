package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPrincipalTagAttributeMapInput {
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public GetPrincipalTagAttributeMapInput withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
    @JsonProperty("IdentityProviderName")
    public String identityProviderName;
    public GetPrincipalTagAttributeMapInput withIdentityProviderName(String identityProviderName) {
        this.identityProviderName = identityProviderName;
        return this;
    }
}