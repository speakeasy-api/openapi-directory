package openapisdk.models.operations;



public class DescribeBudgetsResponse {
    public Object accessDeniedException;
    public DescribeBudgetsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeBudgetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBudgetsResponse describeBudgetsResponse;
    public DescribeBudgetsResponse withDescribeBudgetsResponse(openapisdk.models.shared.DescribeBudgetsResponse describeBudgetsResponse) {
        this.describeBudgetsResponse = describeBudgetsResponse;
        return this;
    }
    public Object expiredNextTokenException;
    public DescribeBudgetsResponse withExpiredNextTokenException(Object expiredNextTokenException) {
        this.expiredNextTokenException = expiredNextTokenException;
        return this;
    }
    public Object internalErrorException;
    public DescribeBudgetsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeBudgetsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeBudgetsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public DescribeBudgetsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeBudgetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}