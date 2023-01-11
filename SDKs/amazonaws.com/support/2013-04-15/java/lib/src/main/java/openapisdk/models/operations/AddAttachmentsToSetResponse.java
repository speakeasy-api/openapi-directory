package openapisdk.models.operations;



public class AddAttachmentsToSetResponse {
    public openapisdk.models.shared.AddAttachmentsToSetResponse addAttachmentsToSetResponse;
    public AddAttachmentsToSetResponse withAddAttachmentsToSetResponse(openapisdk.models.shared.AddAttachmentsToSetResponse addAttachmentsToSetResponse) {
        this.addAttachmentsToSetResponse = addAttachmentsToSetResponse;
        return this;
    }
    public Object attachmentLimitExceeded;
    public AddAttachmentsToSetResponse withAttachmentLimitExceeded(Object attachmentLimitExceeded) {
        this.attachmentLimitExceeded = attachmentLimitExceeded;
        return this;
    }
    public Object attachmentSetExpired;
    public AddAttachmentsToSetResponse withAttachmentSetExpired(Object attachmentSetExpired) {
        this.attachmentSetExpired = attachmentSetExpired;
        return this;
    }
    public Object attachmentSetIdNotFound;
    public AddAttachmentsToSetResponse withAttachmentSetIdNotFound(Object attachmentSetIdNotFound) {
        this.attachmentSetIdNotFound = attachmentSetIdNotFound;
        return this;
    }
    public Object attachmentSetSizeLimitExceeded;
    public AddAttachmentsToSetResponse withAttachmentSetSizeLimitExceeded(Object attachmentSetSizeLimitExceeded) {
        this.attachmentSetSizeLimitExceeded = attachmentSetSizeLimitExceeded;
        return this;
    }
    public String contentType;
    public AddAttachmentsToSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public AddAttachmentsToSetResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public AddAttachmentsToSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}