package openapisdk.models.operations;



public class GetProjectResponse {
    public String contentType;
    public GetProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetProject200ApplicationJson getProject200ApplicationJSONObject;
    public GetProjectResponse withGetProject200ApplicationJsonObject(GetProject200ApplicationJson getProject200ApplicationJSONObject) {
        this.getProject200ApplicationJSONObject = getProject200ApplicationJSONObject;
        return this;
    }
}