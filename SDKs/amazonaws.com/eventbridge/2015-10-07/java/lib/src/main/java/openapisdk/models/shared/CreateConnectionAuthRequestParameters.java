package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateConnectionAuthRequestParameters
 * Contains the authorization parameters for the connection.
**/
public class CreateConnectionAuthRequestParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiKeyAuthParameters")
    public CreateConnectionApiKeyAuthRequestParameters apiKeyAuthParameters;
    public CreateConnectionAuthRequestParameters withApiKeyAuthParameters(CreateConnectionApiKeyAuthRequestParameters apiKeyAuthParameters) {
        this.apiKeyAuthParameters = apiKeyAuthParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BasicAuthParameters")
    public CreateConnectionBasicAuthRequestParameters basicAuthParameters;
    public CreateConnectionAuthRequestParameters withBasicAuthParameters(CreateConnectionBasicAuthRequestParameters basicAuthParameters) {
        this.basicAuthParameters = basicAuthParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvocationHttpParameters")
    public ConnectionHttpParameters invocationHttpParameters;
    public CreateConnectionAuthRequestParameters withInvocationHttpParameters(ConnectionHttpParameters invocationHttpParameters) {
        this.invocationHttpParameters = invocationHttpParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OAuthParameters")
    public CreateConnectionOAuthRequestParameters oAuthParameters;
    public CreateConnectionAuthRequestParameters withOAuthParameters(CreateConnectionOAuthRequestParameters oAuthParameters) {
        this.oAuthParameters = oAuthParameters;
        return this;
    }
}