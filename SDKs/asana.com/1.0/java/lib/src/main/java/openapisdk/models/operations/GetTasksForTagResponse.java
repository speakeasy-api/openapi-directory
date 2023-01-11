package openapisdk.models.operations;



public class GetTasksForTagResponse {
    public String contentType;
    public GetTasksForTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTasksForTagResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTasksForTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTasksForTag200ApplicationJson getTasksForTag200ApplicationJSONObject;
    public GetTasksForTagResponse withGetTasksForTag200ApplicationJsonObject(GetTasksForTag200ApplicationJson getTasksForTag200ApplicationJSONObject) {
        this.getTasksForTag200ApplicationJSONObject = getTasksForTag200ApplicationJSONObject;
        return this;
    }
}