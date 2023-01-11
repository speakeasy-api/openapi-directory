package openapisdk.models.operations;



public class ListDevelopmentSchemaArnsResponse {
    public Object accessDeniedException;
    public ListDevelopmentSchemaArnsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListDevelopmentSchemaArnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListDevelopmentSchemaArnsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListDevelopmentSchemaArnsResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListDevelopmentSchemaArnsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListDevelopmentSchemaArnsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListDevelopmentSchemaArnsResponse listDevelopmentSchemaArnsResponse;
    public ListDevelopmentSchemaArnsResponse withListDevelopmentSchemaArnsResponse(openapisdk.models.shared.ListDevelopmentSchemaArnsResponse listDevelopmentSchemaArnsResponse) {
        this.listDevelopmentSchemaArnsResponse = listDevelopmentSchemaArnsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListDevelopmentSchemaArnsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListDevelopmentSchemaArnsResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListDevelopmentSchemaArnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListDevelopmentSchemaArnsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}