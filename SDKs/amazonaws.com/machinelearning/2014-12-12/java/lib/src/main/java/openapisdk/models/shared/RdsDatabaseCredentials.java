package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RdsDatabaseCredentials
 * The database credentials to connect to a database on an RDS DB instance.
**/
public class RdsDatabaseCredentials {
    @JsonProperty("Password")
    public String password;
    public RdsDatabaseCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public RdsDatabaseCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}