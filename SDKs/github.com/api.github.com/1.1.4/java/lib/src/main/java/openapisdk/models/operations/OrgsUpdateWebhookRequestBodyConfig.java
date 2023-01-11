package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrgsUpdateWebhookRequestBodyConfig
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/orgs#update-hook-config-params).
**/
public class OrgsUpdateWebhookRequestBodyConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public String contentType;
    public OrgsUpdateWebhookRequestBodyConfig withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insecure_ssl")
    public String insecureSsl;
    public OrgsUpdateWebhookRequestBodyConfig withInsecureSsl(String insecureSsl) {
        this.insecureSsl = insecureSsl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public OrgsUpdateWebhookRequestBodyConfig withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public OrgsUpdateWebhookRequestBodyConfig withUrl(String url) {
        this.url = url;
        return this;
    }
}