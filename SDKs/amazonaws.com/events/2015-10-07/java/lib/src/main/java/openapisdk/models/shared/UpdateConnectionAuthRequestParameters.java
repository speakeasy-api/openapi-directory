package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateConnectionAuthRequestParameters
 * Contains the additional parameters to use for the connection.
**/
public class UpdateConnectionAuthRequestParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiKeyAuthParameters")
    public UpdateConnectionApiKeyAuthRequestParameters apiKeyAuthParameters;
    public UpdateConnectionAuthRequestParameters withApiKeyAuthParameters(UpdateConnectionApiKeyAuthRequestParameters apiKeyAuthParameters) {
        this.apiKeyAuthParameters = apiKeyAuthParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BasicAuthParameters")
    public UpdateConnectionBasicAuthRequestParameters basicAuthParameters;
    public UpdateConnectionAuthRequestParameters withBasicAuthParameters(UpdateConnectionBasicAuthRequestParameters basicAuthParameters) {
        this.basicAuthParameters = basicAuthParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvocationHttpParameters")
    public ConnectionHttpParameters invocationHttpParameters;
    public UpdateConnectionAuthRequestParameters withInvocationHttpParameters(ConnectionHttpParameters invocationHttpParameters) {
        this.invocationHttpParameters = invocationHttpParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OAuthParameters")
    public UpdateConnectionOAuthRequestParameters oAuthParameters;
    public UpdateConnectionAuthRequestParameters withOAuthParameters(UpdateConnectionOAuthRequestParameters oAuthParameters) {
        this.oAuthParameters = oAuthParameters;
        return this;
    }
}