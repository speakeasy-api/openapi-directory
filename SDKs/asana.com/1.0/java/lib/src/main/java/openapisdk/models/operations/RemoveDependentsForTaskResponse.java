package openapisdk.models.operations;



public class RemoveDependentsForTaskResponse {
    public String contentType;
    public RemoveDependentsForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveDependentsForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveDependentsForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveDependentsForTask200ApplicationJson removeDependentsForTask200ApplicationJSONObject;
    public RemoveDependentsForTaskResponse withRemoveDependentsForTask200ApplicationJsonObject(RemoveDependentsForTask200ApplicationJson removeDependentsForTask200ApplicationJSONObject) {
        this.removeDependentsForTask200ApplicationJSONObject = removeDependentsForTask200ApplicationJSONObject;
        return this;
    }
}