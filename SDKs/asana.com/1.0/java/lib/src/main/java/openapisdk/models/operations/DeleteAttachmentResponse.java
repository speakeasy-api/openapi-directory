package openapisdk.models.operations;



public class DeleteAttachmentResponse {
    public String contentType;
    public DeleteAttachmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteAttachmentResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteAttachmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteAttachment200ApplicationJson deleteAttachment200ApplicationJSONObject;
    public DeleteAttachmentResponse withDeleteAttachment200ApplicationJsonObject(DeleteAttachment200ApplicationJson deleteAttachment200ApplicationJSONObject) {
        this.deleteAttachment200ApplicationJSONObject = deleteAttachment200ApplicationJSONObject;
        return this;
    }
}