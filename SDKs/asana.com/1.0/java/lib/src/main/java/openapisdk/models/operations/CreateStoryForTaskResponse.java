package openapisdk.models.operations;



public class CreateStoryForTaskResponse {
    public String contentType;
    public CreateStoryForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateStoryForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateStoryForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateStoryForTask201ApplicationJson createStoryForTask201ApplicationJSONObject;
    public CreateStoryForTaskResponse withCreateStoryForTask201ApplicationJsonObject(CreateStoryForTask201ApplicationJson createStoryForTask201ApplicationJSONObject) {
        this.createStoryForTask201ApplicationJSONObject = createStoryForTask201ApplicationJSONObject;
        return this;
    }
}