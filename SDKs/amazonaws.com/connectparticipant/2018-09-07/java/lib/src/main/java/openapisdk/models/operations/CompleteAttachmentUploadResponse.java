package openapisdk.models.operations;



public class CompleteAttachmentUploadResponse {
    public Object accessDeniedException;
    public CompleteAttachmentUploadResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> completeAttachmentUploadResponse;
    public CompleteAttachmentUploadResponse withCompleteAttachmentUploadResponse(java.util.Map<String, Object> completeAttachmentUploadResponse) {
        this.completeAttachmentUploadResponse = completeAttachmentUploadResponse;
        return this;
    }
    public Object conflictException;
    public CompleteAttachmentUploadResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CompleteAttachmentUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public CompleteAttachmentUploadResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CompleteAttachmentUploadResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CompleteAttachmentUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CompleteAttachmentUploadResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CompleteAttachmentUploadResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}