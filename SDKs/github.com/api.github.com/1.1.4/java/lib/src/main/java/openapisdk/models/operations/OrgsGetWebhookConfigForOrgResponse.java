package openapisdk.models.operations;



public class OrgsGetWebhookConfigForOrgResponse {
    public String contentType;
    public OrgsGetWebhookConfigForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsGetWebhookConfigForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhookConfig webhookConfig;
    public OrgsGetWebhookConfigForOrgResponse withWebhookConfig(openapisdk.models.shared.WebhookConfig webhookConfig) {
        this.webhookConfig = webhookConfig;
        return this;
    }
}