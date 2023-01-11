package openapisdk.models.operations;



public class DisableProactiveEngagementResponse {
    public String contentType;
    public DisableProactiveEngagementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disableProactiveEngagementResponse;
    public DisableProactiveEngagementResponse withDisableProactiveEngagementResponse(java.util.Map<String, Object> disableProactiveEngagementResponse) {
        this.disableProactiveEngagementResponse = disableProactiveEngagementResponse;
        return this;
    }
    public Object internalErrorException;
    public DisableProactiveEngagementResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public DisableProactiveEngagementResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidParameterException;
    public DisableProactiveEngagementResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object optimisticLockException;
    public DisableProactiveEngagementResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisableProactiveEngagementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisableProactiveEngagementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}