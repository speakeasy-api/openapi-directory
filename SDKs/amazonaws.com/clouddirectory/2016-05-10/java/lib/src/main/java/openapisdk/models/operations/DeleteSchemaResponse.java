package openapisdk.models.operations;



public class DeleteSchemaResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public DeleteSchemaResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteSchemaResponse deleteSchemaResponse;
    public DeleteSchemaResponse withDeleteSchemaResponse(openapisdk.models.shared.DeleteSchemaResponse deleteSchemaResponse) {
        this.deleteSchemaResponse = deleteSchemaResponse;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public DeleteSchemaResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public DeleteSchemaResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public DeleteSchemaResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public DeleteSchemaResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public DeleteSchemaResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DeleteSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StillContainsLinksException stillContainsLinksException;
    public DeleteSchemaResponse withStillContainsLinksException(openapisdk.models.shared.StillContainsLinksException stillContainsLinksException) {
        this.stillContainsLinksException = stillContainsLinksException;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public DeleteSchemaResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}