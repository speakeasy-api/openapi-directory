package openapisdk.models.operations;



public class UpdateBudgetActionResponse {
    public Object accessDeniedException;
    public UpdateBudgetActionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateBudgetActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public UpdateBudgetActionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateBudgetActionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public UpdateBudgetActionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object resourceLockedException;
    public UpdateBudgetActionResponse withResourceLockedException(Object resourceLockedException) {
        this.resourceLockedException = resourceLockedException;
        return this;
    }
    public Long statusCode;
    public UpdateBudgetActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateBudgetActionResponse updateBudgetActionResponse;
    public UpdateBudgetActionResponse withUpdateBudgetActionResponse(openapisdk.models.shared.UpdateBudgetActionResponse updateBudgetActionResponse) {
        this.updateBudgetActionResponse = updateBudgetActionResponse;
        return this;
    }
}