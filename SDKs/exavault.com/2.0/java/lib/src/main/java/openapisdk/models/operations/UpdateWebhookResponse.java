package openapisdk.models.operations;



public class UpdateWebhookResponse {
    public String contentType;
    public UpdateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhookResponse webhookResponse;
    public UpdateWebhookResponse withWebhookResponse(openapisdk.models.shared.WebhookResponse webhookResponse) {
        this.webhookResponse = webhookResponse;
        return this;
    }
}