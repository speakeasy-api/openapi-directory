package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RedshiftDatabaseCredentials
 * Describes the database credentials for connecting to a database on an Amazon Redshift cluster.
**/
public class RedshiftDatabaseCredentials {
    @JsonProperty("Password")
    public String password;
    public RedshiftDatabaseCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public RedshiftDatabaseCredentials withUsername(String username) {
        this.username = username;
        return this;
    }
}