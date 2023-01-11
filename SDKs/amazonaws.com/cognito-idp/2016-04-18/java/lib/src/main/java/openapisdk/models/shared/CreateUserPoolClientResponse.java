package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateUserPoolClientResponse
 * Represents the response from the server to create a user pool client.
**/
public class CreateUserPoolClientResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolClient")
    public UserPoolClientType userPoolClient;
    public CreateUserPoolClientResponse withUserPoolClient(UserPoolClientType userPoolClient) {
        this.userPoolClient = userPoolClient;
        return this;
    }
}