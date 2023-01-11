package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SnowflakeConnectorProfileCredentials
 *  The connector-specific profile credentials required when using Snowflake. 
**/
public class SnowflakeConnectorProfileCredentials {
    @JsonProperty("password")
    public String password;
    public SnowflakeConnectorProfileCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public SnowflakeConnectorProfileCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}