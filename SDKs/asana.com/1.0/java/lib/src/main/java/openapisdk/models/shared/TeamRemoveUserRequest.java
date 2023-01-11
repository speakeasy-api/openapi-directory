package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TeamRemoveUserRequest
 * A user identification object for specification with the addUser/removeUser endpoints.
**/
public class TeamRemoveUserRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public TeamRemoveUserRequest withUser(String user) {
        this.user = user;
        return this;
    }
}