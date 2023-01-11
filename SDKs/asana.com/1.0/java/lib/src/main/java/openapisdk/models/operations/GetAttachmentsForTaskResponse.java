package openapisdk.models.operations;



public class GetAttachmentsForTaskResponse {
    public String contentType;
    public GetAttachmentsForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetAttachmentsForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetAttachmentsForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAttachmentsForTask200ApplicationJson getAttachmentsForTask200ApplicationJSONObject;
    public GetAttachmentsForTaskResponse withGetAttachmentsForTask200ApplicationJsonObject(GetAttachmentsForTask200ApplicationJson getAttachmentsForTask200ApplicationJSONObject) {
        this.getAttachmentsForTask200ApplicationJSONObject = getAttachmentsForTask200ApplicationJSONObject;
        return this;
    }
}