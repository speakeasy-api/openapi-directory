package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AdminUserGlobalSignOutRequest
 * The request to sign out of all devices, as an administrator.
**/
public class AdminUserGlobalSignOutRequest {
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminUserGlobalSignOutRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminUserGlobalSignOutRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}