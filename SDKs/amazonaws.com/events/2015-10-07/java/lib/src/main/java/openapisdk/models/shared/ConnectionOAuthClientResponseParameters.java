package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionOAuthClientResponseParameters
 * Contains the client response parameters for the connection when OAuth is specified as the authorization type.
**/
public class ConnectionOAuthClientResponseParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientID")
    public String clientID;
    public ConnectionOAuthClientResponseParameters withClientId(String clientID) {
        this.clientID = clientID;
        return this;
    }
}