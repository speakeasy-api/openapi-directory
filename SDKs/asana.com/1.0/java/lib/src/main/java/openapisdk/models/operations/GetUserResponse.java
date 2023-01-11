package openapisdk.models.operations;



public class GetUserResponse {
    public String contentType;
    public GetUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetUserResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUser200ApplicationJson getUser200ApplicationJSONObject;
    public GetUserResponse withGetUser200ApplicationJsonObject(GetUser200ApplicationJson getUser200ApplicationJSONObject) {
        this.getUser200ApplicationJSONObject = getUser200ApplicationJSONObject;
        return this;
    }
}