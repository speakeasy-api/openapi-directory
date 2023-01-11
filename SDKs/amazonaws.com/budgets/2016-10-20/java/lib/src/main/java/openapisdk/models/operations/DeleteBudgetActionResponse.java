package openapisdk.models.operations;



public class DeleteBudgetActionResponse {
    public Object accessDeniedException;
    public DeleteBudgetActionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteBudgetActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBudgetActionResponse deleteBudgetActionResponse;
    public DeleteBudgetActionResponse withDeleteBudgetActionResponse(openapisdk.models.shared.DeleteBudgetActionResponse deleteBudgetActionResponse) {
        this.deleteBudgetActionResponse = deleteBudgetActionResponse;
        return this;
    }
    public Object internalErrorException;
    public DeleteBudgetActionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteBudgetActionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public DeleteBudgetActionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object resourceLockedException;
    public DeleteBudgetActionResponse withResourceLockedException(Object resourceLockedException) {
        this.resourceLockedException = resourceLockedException;
        return this;
    }
    public Long statusCode;
    public DeleteBudgetActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}