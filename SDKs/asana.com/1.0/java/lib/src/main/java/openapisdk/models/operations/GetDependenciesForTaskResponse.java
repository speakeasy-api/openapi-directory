package openapisdk.models.operations;



public class GetDependenciesForTaskResponse {
    public String contentType;
    public GetDependenciesForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetDependenciesForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetDependenciesForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDependenciesForTask200ApplicationJson getDependenciesForTask200ApplicationJSONObject;
    public GetDependenciesForTaskResponse withGetDependenciesForTask200ApplicationJsonObject(GetDependenciesForTask200ApplicationJson getDependenciesForTask200ApplicationJSONObject) {
        this.getDependenciesForTask200ApplicationJSONObject = getDependenciesForTask200ApplicationJSONObject;
        return this;
    }
}