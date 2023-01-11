package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdminResetUserPasswordRequest
 * Represents the request to reset a user's password as an administrator.
**/
public class AdminResetUserPasswordRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientMetadata")
    public java.util.Map<String, String> clientMetadata;
    public AdminResetUserPasswordRequest withClientMetadata(java.util.Map<String, String> clientMetadata) {
        this.clientMetadata = clientMetadata;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminResetUserPasswordRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminResetUserPasswordRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}