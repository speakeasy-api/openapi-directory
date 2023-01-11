package openapisdk.models.operations;



public class GetSubtasksForTaskResponse {
    public String contentType;
    public GetSubtasksForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetSubtasksForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetSubtasksForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSubtasksForTask200ApplicationJson getSubtasksForTask200ApplicationJSONObject;
    public GetSubtasksForTaskResponse withGetSubtasksForTask200ApplicationJsonObject(GetSubtasksForTask200ApplicationJson getSubtasksForTask200ApplicationJSONObject) {
        this.getSubtasksForTask200ApplicationJSONObject = getSubtasksForTask200ApplicationJSONObject;
        return this;
    }
}