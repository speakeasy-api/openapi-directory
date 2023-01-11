package openapisdk.models.operations;



public class ExecuteBudgetActionResponse {
    public Object accessDeniedException;
    public ExecuteBudgetActionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ExecuteBudgetActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExecuteBudgetActionResponse executeBudgetActionResponse;
    public ExecuteBudgetActionResponse withExecuteBudgetActionResponse(openapisdk.models.shared.ExecuteBudgetActionResponse executeBudgetActionResponse) {
        this.executeBudgetActionResponse = executeBudgetActionResponse;
        return this;
    }
    public Object internalErrorException;
    public ExecuteBudgetActionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ExecuteBudgetActionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public ExecuteBudgetActionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object resourceLockedException;
    public ExecuteBudgetActionResponse withResourceLockedException(Object resourceLockedException) {
        this.resourceLockedException = resourceLockedException;
        return this;
    }
    public Long statusCode;
    public ExecuteBudgetActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}