package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnterpriseAdminCreateGlobalWebhookRequestBodyConfig
 * Key/value pairs to provide settings for this webhook.
**/
public class EnterpriseAdminCreateGlobalWebhookRequestBodyConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public String contentType;
    public EnterpriseAdminCreateGlobalWebhookRequestBodyConfig withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insecure_ssl")
    public String insecureSsl;
    public EnterpriseAdminCreateGlobalWebhookRequestBodyConfig withInsecureSsl(String insecureSsl) {
        this.insecureSsl = insecureSsl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public EnterpriseAdminCreateGlobalWebhookRequestBodyConfig withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public EnterpriseAdminCreateGlobalWebhookRequestBodyConfig withUrl(String url) {
        this.url = url;
        return this;
    }
}