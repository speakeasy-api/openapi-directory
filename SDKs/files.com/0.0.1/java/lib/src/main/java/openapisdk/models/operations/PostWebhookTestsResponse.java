package openapisdk.models.operations;



public class PostWebhookTestsResponse {
    public String contentType;
    public PostWebhookTestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostWebhookTestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebhookTestEntity webhookTestEntity;
    public PostWebhookTestsResponse withWebhookTestEntity(openapisdk.models.shared.WebhookTestEntity webhookTestEntity) {
        this.webhookTestEntity = webhookTestEntity;
        return this;
    }
}