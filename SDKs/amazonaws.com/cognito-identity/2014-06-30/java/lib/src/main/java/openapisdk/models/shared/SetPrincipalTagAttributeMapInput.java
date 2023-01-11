package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetPrincipalTagAttributeMapInput {
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public SetPrincipalTagAttributeMapInput withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
    @JsonProperty("IdentityProviderName")
    public String identityProviderName;
    public SetPrincipalTagAttributeMapInput withIdentityProviderName(String identityProviderName) {
        this.identityProviderName = identityProviderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrincipalTags")
    public java.util.Map<String, String> principalTags;
    public SetPrincipalTagAttributeMapInput withPrincipalTags(java.util.Map<String, String> principalTags) {
        this.principalTags = principalTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseDefaults")
    public Boolean useDefaults;
    public SetPrincipalTagAttributeMapInput withUseDefaults(Boolean useDefaults) {
        this.useDefaults = useDefaults;
        return this;
    }
}