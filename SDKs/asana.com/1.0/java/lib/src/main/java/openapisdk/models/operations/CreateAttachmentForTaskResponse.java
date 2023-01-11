package openapisdk.models.operations;



public class CreateAttachmentForTaskResponse {
    public String contentType;
    public CreateAttachmentForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateAttachmentForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateAttachmentForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateAttachmentForTask200ApplicationJson createAttachmentForTask200ApplicationJSONObject;
    public CreateAttachmentForTaskResponse withCreateAttachmentForTask200ApplicationJsonObject(CreateAttachmentForTask200ApplicationJson createAttachmentForTask200ApplicationJSONObject) {
        this.createAttachmentForTask200ApplicationJSONObject = createAttachmentForTask200ApplicationJSONObject;
        return this;
    }
}