package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrgsCreateWebhookRequestBodyConfig
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#create-hook-config-params).
**/
public class OrgsCreateWebhookRequestBodyConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public String contentType;
    public OrgsCreateWebhookRequestBodyConfig withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insecure_ssl")
    public Object insecureSsl;
    public OrgsCreateWebhookRequestBodyConfig withInsecureSsl(Object insecureSsl) {
        this.insecureSsl = insecureSsl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public OrgsCreateWebhookRequestBodyConfig withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public OrgsCreateWebhookRequestBodyConfig withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public OrgsCreateWebhookRequestBodyConfig withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public OrgsCreateWebhookRequestBodyConfig withUsername(String username) {
        this.username = username;
        return this;
    }
}