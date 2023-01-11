package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateUserRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessString")
    public String accessString;
    public UpdateUserRequest withAccessString(String accessString) {
        this.accessString = accessString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthenticationMode")
    public AuthenticationMode authenticationMode;
    public UpdateUserRequest withAuthenticationMode(AuthenticationMode authenticationMode) {
        this.authenticationMode = authenticationMode;
        return this;
    }
    @JsonProperty("UserName")
    public String userName;
    public UpdateUserRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}