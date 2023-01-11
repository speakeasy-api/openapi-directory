package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UnlinkDeveloperIdentityInput
 * Input to the <code>UnlinkDeveloperIdentity</code> action.
**/
public class UnlinkDeveloperIdentityInput {
    @JsonProperty("DeveloperProviderName")
    public String developerProviderName;
    public UnlinkDeveloperIdentityInput withDeveloperProviderName(String developerProviderName) {
        this.developerProviderName = developerProviderName;
        return this;
    }
    @JsonProperty("DeveloperUserIdentifier")
    public String developerUserIdentifier;
    public UnlinkDeveloperIdentityInput withDeveloperUserIdentifier(String developerUserIdentifier) {
        this.developerUserIdentifier = developerUserIdentifier;
        return this;
    }
    @JsonProperty("IdentityId")
    public String identityId;
    public UnlinkDeveloperIdentityInput withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public UnlinkDeveloperIdentityInput withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}