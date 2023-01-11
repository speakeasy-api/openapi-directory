package openapisdk.models.operations;



public class AppsUpdateWebhookConfigForAppResponse {
    public String contentType;
    public AppsUpdateWebhookConfigForAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsUpdateWebhookConfigForAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhookConfig webhookConfig;
    public AppsUpdateWebhookConfigForAppResponse withWebhookConfig(openapisdk.models.shared.WebhookConfig webhookConfig) {
        this.webhookConfig = webhookConfig;
        return this;
    }
}