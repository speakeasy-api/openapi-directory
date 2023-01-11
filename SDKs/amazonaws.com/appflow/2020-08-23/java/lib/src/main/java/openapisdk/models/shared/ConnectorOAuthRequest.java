package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectorOAuthRequest
 *  Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. 
**/
public class ConnectorOAuthRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authCode")
    public String authCode;
    public ConnectorOAuthRequest withAuthCode(String authCode) {
        this.authCode = authCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirectUri")
    public String redirectUri;
    public ConnectorOAuthRequest withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
}