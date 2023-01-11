package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteIdentityProviderRequest {
    @JsonProperty("ProviderName")
    public String providerName;
    public DeleteIdentityProviderRequest withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public DeleteIdentityProviderRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}