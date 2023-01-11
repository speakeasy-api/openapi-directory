package openapisdk.models.operations;



public class DuplicateProjectResponse {
    public String contentType;
    public DuplicateProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DuplicateProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DuplicateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DuplicateProject201ApplicationJson duplicateProject201ApplicationJSONObject;
    public DuplicateProjectResponse withDuplicateProject201ApplicationJsonObject(DuplicateProject201ApplicationJson duplicateProject201ApplicationJSONObject) {
        this.duplicateProject201ApplicationJSONObject = duplicateProject201ApplicationJSONObject;
        return this;
    }
}