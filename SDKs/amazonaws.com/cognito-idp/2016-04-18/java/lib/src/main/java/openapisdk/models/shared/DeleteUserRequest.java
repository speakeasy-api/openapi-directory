package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteUserRequest
 * Represents the request to delete a user.
**/
public class DeleteUserRequest {
    @JsonProperty("AccessToken")
    public String accessToken;
    public DeleteUserRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
}