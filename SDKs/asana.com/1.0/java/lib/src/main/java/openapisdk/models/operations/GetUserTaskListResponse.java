package openapisdk.models.operations;



public class GetUserTaskListResponse {
    public String contentType;
    public GetUserTaskListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetUserTaskListResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetUserTaskListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUserTaskList200ApplicationJson getUserTaskList200ApplicationJSONObject;
    public GetUserTaskListResponse withGetUserTaskList200ApplicationJsonObject(GetUserTaskList200ApplicationJson getUserTaskList200ApplicationJSONObject) {
        this.getUserTaskList200ApplicationJSONObject = getUserTaskList200ApplicationJSONObject;
        return this;
    }
}