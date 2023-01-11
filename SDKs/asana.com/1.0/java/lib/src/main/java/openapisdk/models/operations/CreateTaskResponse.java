package openapisdk.models.operations;



public class CreateTaskResponse {
    public String contentType;
    public CreateTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateTask201ApplicationJson createTask201ApplicationJSONObject;
    public CreateTaskResponse withCreateTask201ApplicationJsonObject(CreateTask201ApplicationJson createTask201ApplicationJSONObject) {
        this.createTask201ApplicationJSONObject = createTask201ApplicationJSONObject;
        return this;
    }
}