package openapisdk.models.operations;



public class GetWebhookByIdResponse {
    public String contentType;
    public GetWebhookByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWebhookByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhookResponse webhookResponse;
    public GetWebhookByIdResponse withWebhookResponse(openapisdk.models.shared.WebhookResponse webhookResponse) {
        this.webhookResponse = webhookResponse;
        return this;
    }
}