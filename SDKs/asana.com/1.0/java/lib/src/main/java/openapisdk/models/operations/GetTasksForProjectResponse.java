package openapisdk.models.operations;



public class GetTasksForProjectResponse {
    public String contentType;
    public GetTasksForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTasksForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTasksForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTasksForProject200ApplicationJson getTasksForProject200ApplicationJSONObject;
    public GetTasksForProjectResponse withGetTasksForProject200ApplicationJsonObject(GetTasksForProject200ApplicationJson getTasksForProject200ApplicationJSONObject) {
        this.getTasksForProject200ApplicationJSONObject = getTasksForProject200ApplicationJSONObject;
        return this;
    }
}