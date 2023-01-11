package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateConnectionOAuthClientRequestParameters
 * Contains the OAuth authorization parameters to use for the connection.
**/
public class UpdateConnectionOAuthClientRequestParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientID")
    public String clientID;
    public UpdateConnectionOAuthClientRequestParameters withClientId(String clientID) {
        this.clientID = clientID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientSecret")
    public String clientSecret;
    public UpdateConnectionOAuthClientRequestParameters withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
}