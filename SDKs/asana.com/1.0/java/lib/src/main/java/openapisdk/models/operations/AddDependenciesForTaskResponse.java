package openapisdk.models.operations;



public class AddDependenciesForTaskResponse {
    public String contentType;
    public AddDependenciesForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddDependenciesForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddDependenciesForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddDependenciesForTask200ApplicationJson addDependenciesForTask200ApplicationJSONObject;
    public AddDependenciesForTaskResponse withAddDependenciesForTask200ApplicationJsonObject(AddDependenciesForTask200ApplicationJson addDependenciesForTask200ApplicationJSONObject) {
        this.addDependenciesForTask200ApplicationJSONObject = addDependenciesForTask200ApplicationJSONObject;
        return this;
    }
}