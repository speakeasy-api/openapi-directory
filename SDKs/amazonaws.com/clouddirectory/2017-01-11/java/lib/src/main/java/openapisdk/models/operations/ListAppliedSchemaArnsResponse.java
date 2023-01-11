package openapisdk.models.operations;



public class ListAppliedSchemaArnsResponse {
    public Object accessDeniedException;
    public ListAppliedSchemaArnsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAppliedSchemaArnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListAppliedSchemaArnsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListAppliedSchemaArnsResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListAppliedSchemaArnsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListAppliedSchemaArnsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListAppliedSchemaArnsResponse listAppliedSchemaArnsResponse;
    public ListAppliedSchemaArnsResponse withListAppliedSchemaArnsResponse(openapisdk.models.shared.ListAppliedSchemaArnsResponse listAppliedSchemaArnsResponse) {
        this.listAppliedSchemaArnsResponse = listAppliedSchemaArnsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAppliedSchemaArnsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListAppliedSchemaArnsResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListAppliedSchemaArnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListAppliedSchemaArnsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}