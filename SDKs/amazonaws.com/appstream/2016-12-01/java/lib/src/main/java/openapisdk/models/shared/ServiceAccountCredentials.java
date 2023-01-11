package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ServiceAccountCredentials
 * Describes the credentials for the service account used by the fleet or image builder to connect to the directory.
**/
public class ServiceAccountCredentials {
    @JsonProperty("AccountName")
    public String accountName;
    public ServiceAccountCredentials withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonProperty("AccountPassword")
    public String accountPassword;
    public ServiceAccountCredentials withAccountPassword(String accountPassword) {
        this.accountPassword = accountPassword;
        return this;
    }
}