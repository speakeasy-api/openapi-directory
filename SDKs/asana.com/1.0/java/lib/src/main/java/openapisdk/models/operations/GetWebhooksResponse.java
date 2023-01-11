package openapisdk.models.operations;



public class GetWebhooksResponse {
    public String contentType;
    public GetWebhooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetWebhooksResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetWebhooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetWebhooks200ApplicationJson getWebhooks200ApplicationJSONObject;
    public GetWebhooksResponse withGetWebhooks200ApplicationJsonObject(GetWebhooks200ApplicationJson getWebhooks200ApplicationJSONObject) {
        this.getWebhooks200ApplicationJSONObject = getWebhooks200ApplicationJSONObject;
        return this;
    }
}