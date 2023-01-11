package openapisdk.models.operations;



public class ApplySchemaResponse {
    public Object accessDeniedException;
    public ApplySchemaResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.ApplySchemaResponse applySchemaResponse;
    public ApplySchemaResponse withApplySchemaResponse(openapisdk.models.shared.ApplySchemaResponse applySchemaResponse) {
        this.applySchemaResponse = applySchemaResponse;
        return this;
    }
    public String contentType;
    public ApplySchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ApplySchemaResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ApplySchemaResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidAttachmentException;
    public ApplySchemaResponse withInvalidAttachmentException(Object invalidAttachmentException) {
        this.invalidAttachmentException = invalidAttachmentException;
        return this;
    }
    public Object limitExceededException;
    public ApplySchemaResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public ApplySchemaResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ApplySchemaResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Object schemaAlreadyExistsException;
    public ApplySchemaResponse withSchemaAlreadyExistsException(Object schemaAlreadyExistsException) {
        this.schemaAlreadyExistsException = schemaAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public ApplySchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ApplySchemaResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}