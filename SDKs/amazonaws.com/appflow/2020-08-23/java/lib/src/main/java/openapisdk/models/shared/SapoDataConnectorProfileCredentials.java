package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SapoDataConnectorProfileCredentials
 *  The connector-specific profile credentials required when using SAPOData. 
**/
public class SapoDataConnectorProfileCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthCredentials")
    public BasicAuthCredentials basicAuthCredentials;
    public SapoDataConnectorProfileCredentials withBasicAuthCredentials(BasicAuthCredentials basicAuthCredentials) {
        this.basicAuthCredentials = basicAuthCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oAuthCredentials")
    public OAuthCredentials oAuthCredentials;
    public SapoDataConnectorProfileCredentials withOAuthCredentials(OAuthCredentials oAuthCredentials) {
        this.oAuthCredentials = oAuthCredentials;
        return this;
    }
}