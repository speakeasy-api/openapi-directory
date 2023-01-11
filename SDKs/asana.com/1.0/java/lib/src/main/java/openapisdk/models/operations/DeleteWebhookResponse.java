package openapisdk.models.operations;



public class DeleteWebhookResponse {
    public String contentType;
    public DeleteWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteWebhookResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteWebhook200ApplicationJson deleteWebhook200ApplicationJSONObject;
    public DeleteWebhookResponse withDeleteWebhook200ApplicationJsonObject(DeleteWebhook200ApplicationJson deleteWebhook200ApplicationJSONObject) {
        this.deleteWebhook200ApplicationJSONObject = deleteWebhook200ApplicationJSONObject;
        return this;
    }
}