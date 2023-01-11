package openapisdk.models.operations;



public class GetTasksForUserTaskListResponse {
    public String contentType;
    public GetTasksForUserTaskListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTasksForUserTaskListResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTasksForUserTaskListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTasksForUserTaskList200ApplicationJson getTasksForUserTaskList200ApplicationJSONObject;
    public GetTasksForUserTaskListResponse withGetTasksForUserTaskList200ApplicationJsonObject(GetTasksForUserTaskList200ApplicationJson getTasksForUserTaskList200ApplicationJSONObject) {
        this.getTasksForUserTaskList200ApplicationJSONObject = getTasksForUserTaskList200ApplicationJSONObject;
        return this;
    }
}