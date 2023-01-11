package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateUserResponse
 * The object that's returned when a user record is created.
**/
public class CreateUserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public CreateUserResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guid")
    public String guid;
    public CreateUserResponse withGuid(String guid) {
        this.guid = guid;
        return this;
    }
}