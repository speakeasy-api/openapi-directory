package openapisdk.models.operations;



public class EnableProactiveEngagementResponse {
    public String contentType;
    public EnableProactiveEngagementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> enableProactiveEngagementResponse;
    public EnableProactiveEngagementResponse withEnableProactiveEngagementResponse(java.util.Map<String, Object> enableProactiveEngagementResponse) {
        this.enableProactiveEngagementResponse = enableProactiveEngagementResponse;
        return this;
    }
    public Object internalErrorException;
    public EnableProactiveEngagementResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public EnableProactiveEngagementResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidParameterException;
    public EnableProactiveEngagementResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object optimisticLockException;
    public EnableProactiveEngagementResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceNotFoundException;
    public EnableProactiveEngagementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public EnableProactiveEngagementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}