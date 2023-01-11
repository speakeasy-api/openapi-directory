package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteUserPoolClientRequest
 * Represents the request to delete a user pool client.
**/
public class DeleteUserPoolClientRequest {
    @JsonProperty("ClientId")
    public String clientId;
    public DeleteUserPoolClientRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public DeleteUserPoolClientRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}