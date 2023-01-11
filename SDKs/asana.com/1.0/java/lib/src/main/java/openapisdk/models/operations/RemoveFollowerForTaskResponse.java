package openapisdk.models.operations;



public class RemoveFollowerForTaskResponse {
    public String contentType;
    public RemoveFollowerForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveFollowerForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveFollowerForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveFollowerForTask200ApplicationJson removeFollowerForTask200ApplicationJSONObject;
    public RemoveFollowerForTaskResponse withRemoveFollowerForTask200ApplicationJsonObject(RemoveFollowerForTask200ApplicationJson removeFollowerForTask200ApplicationJSONObject) {
        this.removeFollowerForTask200ApplicationJSONObject = removeFollowerForTask200ApplicationJSONObject;
        return this;
    }
}