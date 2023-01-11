package openapisdk.models.operations;



public class CreateSubtaskForTaskResponse {
    public String contentType;
    public CreateSubtaskForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateSubtaskForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateSubtaskForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateSubtaskForTask201ApplicationJson createSubtaskForTask201ApplicationJSONObject;
    public CreateSubtaskForTaskResponse withCreateSubtaskForTask201ApplicationJsonObject(CreateSubtaskForTask201ApplicationJson createSubtaskForTask201ApplicationJSONObject) {
        this.createSubtaskForTask201ApplicationJSONObject = createSubtaskForTask201ApplicationJSONObject;
        return this;
    }
}