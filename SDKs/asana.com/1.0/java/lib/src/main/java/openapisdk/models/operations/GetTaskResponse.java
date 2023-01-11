package openapisdk.models.operations;



public class GetTaskResponse {
    public String contentType;
    public GetTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTask200ApplicationJson getTask200ApplicationJSONObject;
    public GetTaskResponse withGetTask200ApplicationJsonObject(GetTask200ApplicationJson getTask200ApplicationJSONObject) {
        this.getTask200ApplicationJSONObject = getTask200ApplicationJSONObject;
        return this;
    }
}