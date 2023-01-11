package openapisdk.models.operations;



public class OrgsUpdateWebhookConfigForOrgResponse {
    public String contentType;
    public OrgsUpdateWebhookConfigForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsUpdateWebhookConfigForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhookConfig webhookConfig;
    public OrgsUpdateWebhookConfigForOrgResponse withWebhookConfig(openapisdk.models.shared.WebhookConfig webhookConfig) {
        this.webhookConfig = webhookConfig;
        return this;
    }
}