package openapisdk.models.operations;



public class DeregisterScalableTargetResponse {
    public Object concurrentUpdateException;
    public DeregisterScalableTargetResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public DeregisterScalableTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deregisterScalableTargetResponse;
    public DeregisterScalableTargetResponse withDeregisterScalableTargetResponse(java.util.Map<String, Object> deregisterScalableTargetResponse) {
        this.deregisterScalableTargetResponse = deregisterScalableTargetResponse;
        return this;
    }
    public Object internalServiceException;
    public DeregisterScalableTargetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object objectNotFoundException;
    public DeregisterScalableTargetResponse withObjectNotFoundException(Object objectNotFoundException) {
        this.objectNotFoundException = objectNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeregisterScalableTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeregisterScalableTargetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}