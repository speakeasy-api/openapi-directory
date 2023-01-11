package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VeevaConnectorProfileCredentials
 *  The connector-specific profile credentials required when using Veeva. 
**/
public class VeevaConnectorProfileCredentials {
    @JsonProperty("password")
    public String password;
    public VeevaConnectorProfileCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public VeevaConnectorProfileCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}