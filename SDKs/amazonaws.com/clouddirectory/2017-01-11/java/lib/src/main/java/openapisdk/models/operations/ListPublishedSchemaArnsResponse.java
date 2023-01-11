package openapisdk.models.operations;



public class ListPublishedSchemaArnsResponse {
    public Object accessDeniedException;
    public ListPublishedSchemaArnsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListPublishedSchemaArnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListPublishedSchemaArnsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListPublishedSchemaArnsResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListPublishedSchemaArnsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListPublishedSchemaArnsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListPublishedSchemaArnsResponse listPublishedSchemaArnsResponse;
    public ListPublishedSchemaArnsResponse withListPublishedSchemaArnsResponse(openapisdk.models.shared.ListPublishedSchemaArnsResponse listPublishedSchemaArnsResponse) {
        this.listPublishedSchemaArnsResponse = listPublishedSchemaArnsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPublishedSchemaArnsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListPublishedSchemaArnsResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListPublishedSchemaArnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListPublishedSchemaArnsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}