package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateUserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("User")
    public User user;
    public UpdateUserResponse withUser(User user) {
        this.user = user;
        return this;
    }
}