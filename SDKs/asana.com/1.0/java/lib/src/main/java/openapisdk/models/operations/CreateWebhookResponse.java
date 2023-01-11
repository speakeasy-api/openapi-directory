package openapisdk.models.operations;



public class CreateWebhookResponse {
    public String contentType;
    public CreateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateWebhookResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateWebhook201ApplicationJson createWebhook201ApplicationJSONObject;
    public CreateWebhookResponse withCreateWebhook201ApplicationJsonObject(CreateWebhook201ApplicationJson createWebhook201ApplicationJSONObject) {
        this.createWebhook201ApplicationJSONObject = createWebhook201ApplicationJSONObject;
        return this;
    }
}