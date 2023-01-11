package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ZendeskConnectorProfileCredentials
 *  The connector-specific profile credentials required when using Zendesk. 
**/
public class ZendeskConnectorProfileCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessToken")
    public String accessToken;
    public ZendeskConnectorProfileCredentials withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("clientId")
    public String clientId;
    public ZendeskConnectorProfileCredentials withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("clientSecret")
    public String clientSecret;
    public ZendeskConnectorProfileCredentials withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oAuthRequest")
    public ConnectorOAuthRequest oAuthRequest;
    public ZendeskConnectorProfileCredentials withOAuthRequest(ConnectorOAuthRequest oAuthRequest) {
        this.oAuthRequest = oAuthRequest;
        return this;
    }
}