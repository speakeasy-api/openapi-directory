package openapisdk.models.operations;



public class ReposUpdateWebhookConfigForRepoResponse {
    public String contentType;
    public ReposUpdateWebhookConfigForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposUpdateWebhookConfigForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhookConfig webhookConfig;
    public ReposUpdateWebhookConfigForRepoResponse withWebhookConfig(openapisdk.models.shared.WebhookConfig webhookConfig) {
        this.webhookConfig = webhookConfig;
        return this;
    }
}