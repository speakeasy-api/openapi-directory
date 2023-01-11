package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RedshiftConnectorProfileCredentials
 *  The connector-specific profile credentials required when using Amazon Redshift. 
**/
public class RedshiftConnectorProfileCredentials {
    @JsonProperty("password")
    public String password;
    public RedshiftConnectorProfileCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public RedshiftConnectorProfileCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}