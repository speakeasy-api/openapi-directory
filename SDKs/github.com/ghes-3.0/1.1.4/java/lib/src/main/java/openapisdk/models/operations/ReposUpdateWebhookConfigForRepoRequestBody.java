package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposUpdateWebhookConfigForRepoRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public String contentType;
    public ReposUpdateWebhookConfigForRepoRequestBody withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insecure_ssl")
    public Object insecureSsl;
    public ReposUpdateWebhookConfigForRepoRequestBody withInsecureSsl(Object insecureSsl) {
        this.insecureSsl = insecureSsl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ReposUpdateWebhookConfigForRepoRequestBody withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ReposUpdateWebhookConfigForRepoRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}