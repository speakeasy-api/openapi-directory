package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AdminGetUserRequest
 * Represents the request to get the specified user as an administrator.
**/
public class AdminGetUserRequest {
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminGetUserRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminGetUserRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}