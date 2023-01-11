package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserId")
    public String userId;
    public CreateUserResponse withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}