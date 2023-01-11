package openapisdk.models.operations;



public class UpdateSubscriptionResponse {
    public String contentType;
    public UpdateSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public UpdateSubscriptionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateSubscriptionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object lockedSubscriptionException;
    public UpdateSubscriptionResponse withLockedSubscriptionException(Object lockedSubscriptionException) {
        this.lockedSubscriptionException = lockedSubscriptionException;
        return this;
    }
    public Object optimisticLockException;
    public UpdateSubscriptionResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateSubscriptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateSubscriptionResponse;
    public UpdateSubscriptionResponse withUpdateSubscriptionResponse(java.util.Map<String, Object> updateSubscriptionResponse) {
        this.updateSubscriptionResponse = updateSubscriptionResponse;
        return this;
    }
}