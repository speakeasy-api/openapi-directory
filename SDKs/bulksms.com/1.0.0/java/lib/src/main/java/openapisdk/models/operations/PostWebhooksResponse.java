package openapisdk.models.operations;



public class PostWebhooksResponse {
    public String contentType;
    public PostWebhooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostWebhooksResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostWebhooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webhook webhook;
    public PostWebhooksResponse withWebhook(openapisdk.models.shared.Webhook webhook) {
        this.webhook = webhook;
        return this;
    }
}