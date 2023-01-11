package openapisdk.models.operations;



public class DeleteSchemaResponse {
    public Object accessDeniedException;
    public DeleteSchemaResponse withAccessDeniedException(Object accessDeniedException) {
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
    public Object internalServiceException;
    public DeleteSchemaResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public DeleteSchemaResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public DeleteSchemaResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteSchemaResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public DeleteSchemaResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DeleteSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object stillContainsLinksException;
    public DeleteSchemaResponse withStillContainsLinksException(Object stillContainsLinksException) {
        this.stillContainsLinksException = stillContainsLinksException;
        return this;
    }
    public Object validationException;
    public DeleteSchemaResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}