package openapisdk.models.operations;



public class DescribeBudgetPerformanceHistoryResponse {
    public Object accessDeniedException;
    public DescribeBudgetPerformanceHistoryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeBudgetPerformanceHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBudgetPerformanceHistoryResponse describeBudgetPerformanceHistoryResponse;
    public DescribeBudgetPerformanceHistoryResponse withDescribeBudgetPerformanceHistoryResponse(openapisdk.models.shared.DescribeBudgetPerformanceHistoryResponse describeBudgetPerformanceHistoryResponse) {
        this.describeBudgetPerformanceHistoryResponse = describeBudgetPerformanceHistoryResponse;
        return this;
    }
    public Object expiredNextTokenException;
    public DescribeBudgetPerformanceHistoryResponse withExpiredNextTokenException(Object expiredNextTokenException) {
        this.expiredNextTokenException = expiredNextTokenException;
        return this;
    }
    public Object internalErrorException;
    public DescribeBudgetPerformanceHistoryResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeBudgetPerformanceHistoryResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeBudgetPerformanceHistoryResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public DescribeBudgetPerformanceHistoryResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeBudgetPerformanceHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}