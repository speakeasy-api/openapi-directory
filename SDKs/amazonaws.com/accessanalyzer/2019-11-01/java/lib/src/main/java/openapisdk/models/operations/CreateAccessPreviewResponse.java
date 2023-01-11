package openapisdk.models.operations;



public class CreateAccessPreviewResponse {
    public Object accessDeniedException;
    public CreateAccessPreviewResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateAccessPreviewResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateAccessPreviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAccessPreviewResponse createAccessPreviewResponse;
    public CreateAccessPreviewResponse withCreateAccessPreviewResponse(openapisdk.models.shared.CreateAccessPreviewResponse createAccessPreviewResponse) {
        this.createAccessPreviewResponse = createAccessPreviewResponse;
        return this;
    }
    public Object internalServerException;
    public CreateAccessPreviewResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateAccessPreviewResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateAccessPreviewResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateAccessPreviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateAccessPreviewResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateAccessPreviewResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}