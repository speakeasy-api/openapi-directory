package openapisdk.models.operations;



public class DeleteScheduledActionResponse {
    public Object concurrentUpdateException;
    public DeleteScheduledActionResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public DeleteScheduledActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteScheduledActionResponse;
    public DeleteScheduledActionResponse withDeleteScheduledActionResponse(java.util.Map<String, Object> deleteScheduledActionResponse) {
        this.deleteScheduledActionResponse = deleteScheduledActionResponse;
        return this;
    }
    public Object internalServiceException;
    public DeleteScheduledActionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object objectNotFoundException;
    public DeleteScheduledActionResponse withObjectNotFoundException(Object objectNotFoundException) {
        this.objectNotFoundException = objectNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteScheduledActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteScheduledActionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}