package openapisdk.models.operations;



public class GetTasksForSectionResponse {
    public String contentType;
    public GetTasksForSectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTasksForSectionResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTasksForSectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTasksForSection200ApplicationJson getTasksForSection200ApplicationJSONObject;
    public GetTasksForSectionResponse withGetTasksForSection200ApplicationJsonObject(GetTasksForSection200ApplicationJson getTasksForSection200ApplicationJSONObject) {
        this.getTasksForSection200ApplicationJSONObject = getTasksForSection200ApplicationJSONObject;
        return this;
    }
}