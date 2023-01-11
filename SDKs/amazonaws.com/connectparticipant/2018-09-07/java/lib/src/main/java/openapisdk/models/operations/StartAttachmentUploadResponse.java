package openapisdk.models.operations;



public class StartAttachmentUploadResponse {
    public Object accessDeniedException;
    public StartAttachmentUploadResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public StartAttachmentUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartAttachmentUploadResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public StartAttachmentUploadResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public openapisdk.models.shared.StartAttachmentUploadResponse startAttachmentUploadResponse;
    public StartAttachmentUploadResponse withStartAttachmentUploadResponse(openapisdk.models.shared.StartAttachmentUploadResponse startAttachmentUploadResponse) {
        this.startAttachmentUploadResponse = startAttachmentUploadResponse;
        return this;
    }
    public Long statusCode;
    public StartAttachmentUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartAttachmentUploadResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StartAttachmentUploadResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}