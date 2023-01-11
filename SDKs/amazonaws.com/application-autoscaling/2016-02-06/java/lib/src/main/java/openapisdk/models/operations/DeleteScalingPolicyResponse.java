package openapisdk.models.operations;



public class DeleteScalingPolicyResponse {
    public Object concurrentUpdateException;
    public DeleteScalingPolicyResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public DeleteScalingPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteScalingPolicyResponse;
    public DeleteScalingPolicyResponse withDeleteScalingPolicyResponse(java.util.Map<String, Object> deleteScalingPolicyResponse) {
        this.deleteScalingPolicyResponse = deleteScalingPolicyResponse;
        return this;
    }
    public Object internalServiceException;
    public DeleteScalingPolicyResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object objectNotFoundException;
    public DeleteScalingPolicyResponse withObjectNotFoundException(Object objectNotFoundException) {
        this.objectNotFoundException = objectNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteScalingPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteScalingPolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}