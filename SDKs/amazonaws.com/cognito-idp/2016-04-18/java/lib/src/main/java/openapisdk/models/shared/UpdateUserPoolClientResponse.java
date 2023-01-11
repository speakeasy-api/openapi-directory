package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateUserPoolClientResponse
 * Represents the response from the server to the request to update the user pool client.
**/
public class UpdateUserPoolClientResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolClient")
    public UserPoolClientType userPoolClient;
    public UpdateUserPoolClientResponse withUserPoolClient(UserPoolClientType userPoolClient) {
        this.userPoolClient = userPoolClient;
        return this;
    }
}