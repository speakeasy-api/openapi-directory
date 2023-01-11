package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateConnectionBasicAuthRequestParameters
 * Contains the Basic authorization parameters for the connection.
**/
public class UpdateConnectionBasicAuthRequestParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public UpdateConnectionBasicAuthRequestParameters withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;
    public UpdateConnectionBasicAuthRequestParameters withUsername(String username) {
        this.username = username;
        return this;
    }
}