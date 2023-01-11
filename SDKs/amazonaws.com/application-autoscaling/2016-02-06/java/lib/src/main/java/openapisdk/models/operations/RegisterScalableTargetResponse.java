package openapisdk.models.operations;



public class RegisterScalableTargetResponse {
    public Object concurrentUpdateException;
    public RegisterScalableTargetResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public RegisterScalableTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public RegisterScalableTargetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object limitExceededException;
    public RegisterScalableTargetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public java.util.Map<String, Object> registerScalableTargetResponse;
    public RegisterScalableTargetResponse withRegisterScalableTargetResponse(java.util.Map<String, Object> registerScalableTargetResponse) {
        this.registerScalableTargetResponse = registerScalableTargetResponse;
        return this;
    }
    public Long statusCode;
    public RegisterScalableTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public RegisterScalableTargetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}