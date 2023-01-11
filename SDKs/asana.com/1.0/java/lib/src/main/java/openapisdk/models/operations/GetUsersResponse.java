package openapisdk.models.operations;



public class GetUsersResponse {
    public String contentType;
    public GetUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetUsersResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUsers200ApplicationJson getUsers200ApplicationJSONObject;
    public GetUsersResponse withGetUsers200ApplicationJsonObject(GetUsers200ApplicationJson getUsers200ApplicationJSONObject) {
        this.getUsers200ApplicationJSONObject = getUsers200ApplicationJSONObject;
        return this;
    }
}