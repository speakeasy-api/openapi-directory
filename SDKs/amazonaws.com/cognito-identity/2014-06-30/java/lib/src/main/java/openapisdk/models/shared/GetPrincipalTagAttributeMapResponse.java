package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPrincipalTagAttributeMapResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public GetPrincipalTagAttributeMapResponse withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityProviderName")
    public String identityProviderName;
    public GetPrincipalTagAttributeMapResponse withIdentityProviderName(String identityProviderName) {
        this.identityProviderName = identityProviderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrincipalTags")
    public java.util.Map<String, String> principalTags;
    public GetPrincipalTagAttributeMapResponse withPrincipalTags(java.util.Map<String, String> principalTags) {
        this.principalTags = principalTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseDefaults")
    public Boolean useDefaults;
    public GetPrincipalTagAttributeMapResponse withUseDefaults(Boolean useDefaults) {
        this.useDefaults = useDefaults;
        return this;
    }
}