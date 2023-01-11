package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateConnectionBasicAuthRequestParameters
 * Contains the Basic authorization parameters to use for the connection.
**/
public class CreateConnectionBasicAuthRequestParameters {
    @JsonProperty("Password")
    public String password;
    public CreateConnectionBasicAuthRequestParameters withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public CreateConnectionBasicAuthRequestParameters withUsername(String username) {
        this.username = username;
        return this;
    }
}