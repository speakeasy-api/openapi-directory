package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MarketoConnectorProfileCredentials
 *  The connector-specific profile credentials required by Marketo. 
**/
public class MarketoConnectorProfileCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessToken")
    public String accessToken;
    public MarketoConnectorProfileCredentials withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("clientId")
    public String clientId;
    public MarketoConnectorProfileCredentials withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("clientSecret")
    public String clientSecret;
    public MarketoConnectorProfileCredentials withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oAuthRequest")
    public ConnectorOAuthRequest oAuthRequest;
    public MarketoConnectorProfileCredentials withOAuthRequest(ConnectorOAuthRequest oAuthRequest) {
        this.oAuthRequest = oAuthRequest;
        return this;
    }
}