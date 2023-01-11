package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AdminDeleteUserAttributesRequest
 * Represents the request to delete user attributes as an administrator.
**/
public class AdminDeleteUserAttributesRequest {
    @JsonProperty("UserAttributeNames")
    public String[] userAttributeNames;
    public AdminDeleteUserAttributesRequest withUserAttributeNames(String[] userAttributeNames) {
        this.userAttributeNames = userAttributeNames;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminDeleteUserAttributesRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminDeleteUserAttributesRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}