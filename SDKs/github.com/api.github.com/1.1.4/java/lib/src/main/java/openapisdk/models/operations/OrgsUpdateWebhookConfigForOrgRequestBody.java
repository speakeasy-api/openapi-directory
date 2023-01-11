package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrgsUpdateWebhookConfigForOrgRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public String contentType;
    public OrgsUpdateWebhookConfigForOrgRequestBody withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insecure_ssl")
    public String insecureSsl;
    public OrgsUpdateWebhookConfigForOrgRequestBody withInsecureSsl(String insecureSsl) {
        this.insecureSsl = insecureSsl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public OrgsUpdateWebhookConfigForOrgRequestBody withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public OrgsUpdateWebhookConfigForOrgRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}