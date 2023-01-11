package openapisdk.models.operations;



public class ApplySchemaResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public ApplySchemaResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
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
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public ApplySchemaResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public ApplySchemaResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidAttachmentException invalidAttachmentException;
    public ApplySchemaResponse withInvalidAttachmentException(openapisdk.models.shared.InvalidAttachmentException invalidAttachmentException) {
        this.invalidAttachmentException = invalidAttachmentException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public ApplySchemaResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public ApplySchemaResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public ApplySchemaResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ApplySchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public ApplySchemaResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}