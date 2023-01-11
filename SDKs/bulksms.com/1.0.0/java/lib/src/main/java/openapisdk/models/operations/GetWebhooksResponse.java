package openapisdk.models.operations;



public class GetWebhooksResponse {
    public String contentType;
    public GetWebhooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWebhooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webhook[] webhooks;
    public GetWebhooksResponse withWebhooks(openapisdk.models.shared.Webhook[] webhooks) {
        this.webhooks = webhooks;
        return this;
    }
}