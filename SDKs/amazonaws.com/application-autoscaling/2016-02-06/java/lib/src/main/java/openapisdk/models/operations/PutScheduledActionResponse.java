package openapisdk.models.operations;



public class PutScheduledActionResponse {
    public Object concurrentUpdateException;
    public PutScheduledActionResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public PutScheduledActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public PutScheduledActionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object limitExceededException;
    public PutScheduledActionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object objectNotFoundException;
    public PutScheduledActionResponse withObjectNotFoundException(Object objectNotFoundException) {
        this.objectNotFoundException = objectNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> putScheduledActionResponse;
    public PutScheduledActionResponse withPutScheduledActionResponse(java.util.Map<String, Object> putScheduledActionResponse) {
        this.putScheduledActionResponse = putScheduledActionResponse;
        return this;
    }
    public Long statusCode;
    public PutScheduledActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutScheduledActionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}