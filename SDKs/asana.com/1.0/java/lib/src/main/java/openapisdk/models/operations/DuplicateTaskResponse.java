package openapisdk.models.operations;



public class DuplicateTaskResponse {
    public String contentType;
    public DuplicateTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DuplicateTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DuplicateTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DuplicateTask201ApplicationJson duplicateTask201ApplicationJSONObject;
    public DuplicateTaskResponse withDuplicateTask201ApplicationJsonObject(DuplicateTask201ApplicationJson duplicateTask201ApplicationJSONObject) {
        this.duplicateTask201ApplicationJSONObject = duplicateTask201ApplicationJSONObject;
        return this;
    }
}