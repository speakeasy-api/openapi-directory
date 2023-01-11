package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdminCreateUserResponse
 * Represents the response from the server to the request to create the user.
**/
public class AdminCreateUserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("User")
    public UserType user;
    public AdminCreateUserResponse withUser(UserType user) {
        this.user = user;
        return this;
    }
}