package openapisdk.models.operations;



public class GetWebhooksIdResponse {
    public String contentType;
    public GetWebhooksIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetWebhooksIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetWebhooksIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webhook webhook;
    public GetWebhooksIdResponse withWebhook(openapisdk.models.shared.Webhook webhook) {
        this.webhook = webhook;
        return this;
    }
}