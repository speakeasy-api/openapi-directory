package openapisdk.models.operations;



public class GetCustomFieldResponse {
    public String contentType;
    public GetCustomFieldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetCustomFieldResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetCustomFieldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCustomField200ApplicationJson getCustomField200ApplicationJSONObject;
    public GetCustomFieldResponse withGetCustomField200ApplicationJsonObject(GetCustomField200ApplicationJson getCustomField200ApplicationJSONObject) {
        this.getCustomField200ApplicationJSONObject = getCustomField200ApplicationJSONObject;
        return this;
    }
}