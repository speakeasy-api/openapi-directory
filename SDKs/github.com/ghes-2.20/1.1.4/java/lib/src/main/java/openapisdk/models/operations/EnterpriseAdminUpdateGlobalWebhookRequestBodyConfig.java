package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig
 * Key/value pairs to provide settings for this webhook.
**/
public class EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public String contentType;
    public EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insecure_ssl")
    public String insecureSsl;
    public EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig withInsecureSsl(String insecureSsl) {
        this.insecureSsl = insecureSsl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig withUrl(String url) {
        this.url = url;
        return this;
    }
}