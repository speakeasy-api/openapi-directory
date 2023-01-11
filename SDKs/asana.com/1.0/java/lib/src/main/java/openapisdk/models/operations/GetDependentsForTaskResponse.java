package openapisdk.models.operations;



public class GetDependentsForTaskResponse {
    public String contentType;
    public GetDependentsForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetDependentsForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetDependentsForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDependentsForTask200ApplicationJson getDependentsForTask200ApplicationJSONObject;
    public GetDependentsForTaskResponse withGetDependentsForTask200ApplicationJsonObject(GetDependentsForTask200ApplicationJson getDependentsForTask200ApplicationJSONObject) {
        this.getDependentsForTask200ApplicationJSONObject = getDependentsForTask200ApplicationJSONObject;
        return this;
    }
}