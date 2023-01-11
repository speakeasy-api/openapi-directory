package openapisdk.models.operations;



public class GetWebhookLogsResponse {
    public String contentType;
    public GetWebhookLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWebhookLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhookActivityResponse webhookActivityResponse;
    public GetWebhookLogsResponse withWebhookActivityResponse(openapisdk.models.shared.WebhookActivityResponse webhookActivityResponse) {
        this.webhookActivityResponse = webhookActivityResponse;
        return this;
    }
}