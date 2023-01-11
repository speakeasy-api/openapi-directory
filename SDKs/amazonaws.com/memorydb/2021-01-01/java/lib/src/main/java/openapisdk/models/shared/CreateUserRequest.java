package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUserRequest {
    @JsonProperty("AccessString")
    public String accessString;
    public CreateUserRequest withAccessString(String accessString) {
        this.accessString = accessString;
        return this;
    }
    @JsonProperty("AuthenticationMode")
    public AuthenticationMode authenticationMode;
    public CreateUserRequest withAuthenticationMode(AuthenticationMode authenticationMode) {
        this.authenticationMode = authenticationMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateUserRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("UserName")
    public String userName;
    public CreateUserRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}