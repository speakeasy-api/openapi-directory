package openapisdk.models.operations;



public class DescribeBudgetActionResponse {
    public Object accessDeniedException;
    public DescribeBudgetActionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeBudgetActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBudgetActionResponse describeBudgetActionResponse;
    public DescribeBudgetActionResponse withDescribeBudgetActionResponse(openapisdk.models.shared.DescribeBudgetActionResponse describeBudgetActionResponse) {
        this.describeBudgetActionResponse = describeBudgetActionResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeBudgetActionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeBudgetActionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public DescribeBudgetActionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeBudgetActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}