package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionBasicAuthResponseParameters
 * Contains the authorization parameters for the connection if Basic is specified as the authorization type.
**/
public class ConnectionBasicAuthResponseParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;
    public ConnectionBasicAuthResponseParameters withUsername(String username) {
        this.username = username;
        return this;
    }
}