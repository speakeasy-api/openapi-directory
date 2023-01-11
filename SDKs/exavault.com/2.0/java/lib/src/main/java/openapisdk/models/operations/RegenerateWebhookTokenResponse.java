package openapisdk.models.operations;



public class RegenerateWebhookTokenResponse {
    public String contentType;
    public RegenerateWebhookTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegenerateWebhookTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhookResponse webhookResponse;
    public RegenerateWebhookTokenResponse withWebhookResponse(openapisdk.models.shared.WebhookResponse webhookResponse) {
        this.webhookResponse = webhookResponse;
        return this;
    }
}