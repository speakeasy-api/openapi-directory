package openapisdk.models.operations;



public class AddTaskForSectionResponse {
    public String contentType;
    public AddTaskForSectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddTaskForSectionResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddTaskForSectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddTaskForSection200ApplicationJson addTaskForSection200ApplicationJSONObject;
    public AddTaskForSectionResponse withAddTaskForSection200ApplicationJsonObject(AddTaskForSection200ApplicationJson addTaskForSection200ApplicationJSONObject) {
        this.addTaskForSection200ApplicationJSONObject = addTaskForSection200ApplicationJSONObject;
        return this;
    }
}