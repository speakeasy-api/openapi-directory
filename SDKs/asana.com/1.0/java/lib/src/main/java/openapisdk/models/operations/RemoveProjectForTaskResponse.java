package openapisdk.models.operations;



public class RemoveProjectForTaskResponse {
    public String contentType;
    public RemoveProjectForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveProjectForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveProjectForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveProjectForTask200ApplicationJson removeProjectForTask200ApplicationJSONObject;
    public RemoveProjectForTaskResponse withRemoveProjectForTask200ApplicationJsonObject(RemoveProjectForTask200ApplicationJson removeProjectForTask200ApplicationJSONObject) {
        this.removeProjectForTask200ApplicationJSONObject = removeProjectForTask200ApplicationJSONObject;
        return this;
    }
}