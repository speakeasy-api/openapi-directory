package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetOpenIdTokenForDeveloperIdentityInput
 * Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.
**/
public class GetOpenIdTokenForDeveloperIdentityInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityId")
    public String identityId;
    public GetOpenIdTokenForDeveloperIdentityInput withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public GetOpenIdTokenForDeveloperIdentityInput withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
    @JsonProperty("Logins")
    public java.util.Map<String, String> logins;
    public GetOpenIdTokenForDeveloperIdentityInput withLogins(java.util.Map<String, String> logins) {
        this.logins = logins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrincipalTags")
    public java.util.Map<String, String> principalTags;
    public GetOpenIdTokenForDeveloperIdentityInput withPrincipalTags(java.util.Map<String, String> principalTags) {
        this.principalTags = principalTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TokenDuration")
    public Long tokenDuration;
    public GetOpenIdTokenForDeveloperIdentityInput withTokenDuration(Long tokenDuration) {
        this.tokenDuration = tokenDuration;
        return this;
    }
}