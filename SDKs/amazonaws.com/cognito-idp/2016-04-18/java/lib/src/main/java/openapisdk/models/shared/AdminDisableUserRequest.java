package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AdminDisableUserRequest
 * Represents the request to disable the user as an administrator.
**/
public class AdminDisableUserRequest {
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminDisableUserRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminDisableUserRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}