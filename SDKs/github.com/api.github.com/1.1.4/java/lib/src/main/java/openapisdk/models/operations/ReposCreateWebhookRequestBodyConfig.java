package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReposCreateWebhookRequestBodyConfig
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/repos#create-hook-config-params).
**/
public class ReposCreateWebhookRequestBodyConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public String contentType;
    public ReposCreateWebhookRequestBodyConfig withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digest")
    public String digest;
    public ReposCreateWebhookRequestBodyConfig withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insecure_ssl")
    public String insecureSsl;
    public ReposCreateWebhookRequestBodyConfig withInsecureSsl(String insecureSsl) {
        this.insecureSsl = insecureSsl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ReposCreateWebhookRequestBodyConfig withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public ReposCreateWebhookRequestBodyConfig withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ReposCreateWebhookRequestBodyConfig withUrl(String url) {
        this.url = url;
        return this;
    }
}