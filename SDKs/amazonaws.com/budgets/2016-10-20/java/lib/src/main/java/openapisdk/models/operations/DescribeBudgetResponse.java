package openapisdk.models.operations;



public class DescribeBudgetResponse {
    public Object accessDeniedException;
    public DescribeBudgetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeBudgetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBudgetResponse describeBudgetResponse;
    public DescribeBudgetResponse withDescribeBudgetResponse(openapisdk.models.shared.DescribeBudgetResponse describeBudgetResponse) {
        this.describeBudgetResponse = describeBudgetResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeBudgetResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeBudgetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public DescribeBudgetResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeBudgetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}