package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AdminDisableProviderForUserRequest {
    @JsonProperty("User")
    public ProviderUserIdentifierType user;
    public AdminDisableProviderForUserRequest withUser(ProviderUserIdentifierType user) {
        this.user = user;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminDisableProviderForUserRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}