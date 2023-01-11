package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateConnectionOAuthClientRequestParameters
 * Contains the Basic authorization parameters to use for the connection.
**/
public class CreateConnectionOAuthClientRequestParameters {
    @JsonProperty("ClientID")
    public String clientID;
    public CreateConnectionOAuthClientRequestParameters withClientId(String clientID) {
        this.clientID = clientID;
        return this;
    }
    @JsonProperty("ClientSecret")
    public String clientSecret;
    public CreateConnectionOAuthClientRequestParameters withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
}