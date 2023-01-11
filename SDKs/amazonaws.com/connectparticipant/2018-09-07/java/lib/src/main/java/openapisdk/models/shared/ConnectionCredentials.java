package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionCredentials
 * Connection credentials. 
**/
public class ConnectionCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionToken")
    public String connectionToken;
    public ConnectionCredentials withConnectionToken(String connectionToken) {
        this.connectionToken = connectionToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expiry")
    public String expiry;
    public ConnectionCredentials withExpiry(String expiry) {
        this.expiry = expiry;
        return this;
    }
}