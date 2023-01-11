package openapisdk.models.operations;



public class RemoveTagForTaskResponse {
    public String contentType;
    public RemoveTagForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveTagForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveTagForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveTagForTask200ApplicationJson removeTagForTask200ApplicationJSONObject;
    public RemoveTagForTaskResponse withRemoveTagForTask200ApplicationJsonObject(RemoveTagForTask200ApplicationJson removeTagForTask200ApplicationJSONObject) {
        this.removeTagForTask200ApplicationJSONObject = removeTagForTask200ApplicationJSONObject;
        return this;
    }
}