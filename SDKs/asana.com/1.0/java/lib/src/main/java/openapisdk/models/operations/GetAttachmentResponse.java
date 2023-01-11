package openapisdk.models.operations;



public class GetAttachmentResponse {
    public String contentType;
    public GetAttachmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetAttachmentResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetAttachmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAttachment200ApplicationJson getAttachment200ApplicationJSONObject;
    public GetAttachmentResponse withGetAttachment200ApplicationJsonObject(GetAttachment200ApplicationJson getAttachment200ApplicationJSONObject) {
        this.getAttachment200ApplicationJSONObject = getAttachment200ApplicationJSONObject;
        return this;
    }
}