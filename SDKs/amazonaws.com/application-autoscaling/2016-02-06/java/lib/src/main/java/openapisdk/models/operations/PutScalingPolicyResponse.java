package openapisdk.models.operations;



public class PutScalingPolicyResponse {
    public Object concurrentUpdateException;
    public PutScalingPolicyResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public PutScalingPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object failedResourceAccessException;
    public PutScalingPolicyResponse withFailedResourceAccessException(Object failedResourceAccessException) {
        this.failedResourceAccessException = failedResourceAccessException;
        return this;
    }
    public Object internalServiceException;
    public PutScalingPolicyResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object limitExceededException;
    public PutScalingPolicyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object objectNotFoundException;
    public PutScalingPolicyResponse withObjectNotFoundException(Object objectNotFoundException) {
        this.objectNotFoundException = objectNotFoundException;
        return this;
    }
    public openapisdk.models.shared.PutScalingPolicyResponse putScalingPolicyResponse;
    public PutScalingPolicyResponse withPutScalingPolicyResponse(openapisdk.models.shared.PutScalingPolicyResponse putScalingPolicyResponse) {
        this.putScalingPolicyResponse = putScalingPolicyResponse;
        return this;
    }
    public Long statusCode;
    public PutScalingPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutScalingPolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}