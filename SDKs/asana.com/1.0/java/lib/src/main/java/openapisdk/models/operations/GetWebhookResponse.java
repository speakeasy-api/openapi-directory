package openapisdk.models.operations;



public class GetWebhookResponse {
    public String contentType;
    public GetWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetWebhookResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetWebhook200ApplicationJson getWebhook200ApplicationJSONObject;
    public GetWebhookResponse withGetWebhook200ApplicationJsonObject(GetWebhook200ApplicationJson getWebhook200ApplicationJSONObject) {
        this.getWebhook200ApplicationJSONObject = getWebhook200ApplicationJSONObject;
        return this;
    }
}