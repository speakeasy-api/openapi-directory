package openapisdk.models.operations;



public class GetTasksResponse {
    public String contentType;
    public GetTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTasksResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTasks200ApplicationJson getTasks200ApplicationJSONObject;
    public GetTasksResponse withGetTasks200ApplicationJsonObject(GetTasks200ApplicationJson getTasks200ApplicationJSONObject) {
        this.getTasks200ApplicationJSONObject = getTasks200ApplicationJSONObject;
        return this;
    }
}