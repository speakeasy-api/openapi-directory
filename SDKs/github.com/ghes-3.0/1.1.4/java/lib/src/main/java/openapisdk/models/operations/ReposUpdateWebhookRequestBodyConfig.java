package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReposUpdateWebhookRequestBodyConfig
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-hook-config-params).
**/
public class ReposUpdateWebhookRequestBodyConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public ReposUpdateWebhookRequestBodyConfig withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public String contentType;
    public ReposUpdateWebhookRequestBodyConfig withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insecure_ssl")
    public Object insecureSsl;
    public ReposUpdateWebhookRequestBodyConfig withInsecureSsl(Object insecureSsl) {
        this.insecureSsl = insecureSsl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room")
    public String room;
    public ReposUpdateWebhookRequestBodyConfig withRoom(String room) {
        this.room = room;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ReposUpdateWebhookRequestBodyConfig withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ReposUpdateWebhookRequestBodyConfig withUrl(String url) {
        this.url = url;
        return this;
    }
}