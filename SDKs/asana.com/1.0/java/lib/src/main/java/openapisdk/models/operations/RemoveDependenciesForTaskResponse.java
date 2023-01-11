package openapisdk.models.operations;



public class RemoveDependenciesForTaskResponse {
    public String contentType;
    public RemoveDependenciesForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveDependenciesForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveDependenciesForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveDependenciesForTask200ApplicationJson removeDependenciesForTask200ApplicationJSONObject;
    public RemoveDependenciesForTaskResponse withRemoveDependenciesForTask200ApplicationJsonObject(RemoveDependenciesForTask200ApplicationJson removeDependenciesForTask200ApplicationJSONObject) {
        this.removeDependenciesForTask200ApplicationJSONObject = removeDependenciesForTask200ApplicationJSONObject;
        return this;
    }
}