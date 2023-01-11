package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteUserPoolRequest
 * Represents the request to delete a user pool.
**/
public class DeleteUserPoolRequest {
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public DeleteUserPoolRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}