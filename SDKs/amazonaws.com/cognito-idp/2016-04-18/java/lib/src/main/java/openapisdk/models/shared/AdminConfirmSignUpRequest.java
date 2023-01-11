package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdminConfirmSignUpRequest
 * Represents the request to confirm user registration.
**/
public class AdminConfirmSignUpRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientMetadata")
    public java.util.Map<String, String> clientMetadata;
    public AdminConfirmSignUpRequest withClientMetadata(java.util.Map<String, String> clientMetadata) {
        this.clientMetadata = clientMetadata;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminConfirmSignUpRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminConfirmSignUpRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}