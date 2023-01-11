package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RequestPasswordResetResponse
 * This object contains the password reset code for the user
**/
public class RequestPasswordResetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public RequestPasswordResetResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guid")
    public String guid;
    public RequestPasswordResetResponse withGuid(String guid) {
        this.guid = guid;
        return this;
    }
}