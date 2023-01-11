package openapisdk.models.operations;



public class DescribeBudgetActionHistoriesResponse {
    public Object accessDeniedException;
    public DescribeBudgetActionHistoriesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeBudgetActionHistoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBudgetActionHistoriesResponse describeBudgetActionHistoriesResponse;
    public DescribeBudgetActionHistoriesResponse withDescribeBudgetActionHistoriesResponse(openapisdk.models.shared.DescribeBudgetActionHistoriesResponse describeBudgetActionHistoriesResponse) {
        this.describeBudgetActionHistoriesResponse = describeBudgetActionHistoriesResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeBudgetActionHistoriesResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeBudgetActionHistoriesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeBudgetActionHistoriesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public DescribeBudgetActionHistoriesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeBudgetActionHistoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}