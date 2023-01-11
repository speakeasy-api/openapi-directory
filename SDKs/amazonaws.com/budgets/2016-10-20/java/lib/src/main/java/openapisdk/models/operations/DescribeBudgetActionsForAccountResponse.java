package openapisdk.models.operations;



public class DescribeBudgetActionsForAccountResponse {
    public Object accessDeniedException;
    public DescribeBudgetActionsForAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeBudgetActionsForAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBudgetActionsForAccountResponse describeBudgetActionsForAccountResponse;
    public DescribeBudgetActionsForAccountResponse withDescribeBudgetActionsForAccountResponse(openapisdk.models.shared.DescribeBudgetActionsForAccountResponse describeBudgetActionsForAccountResponse) {
        this.describeBudgetActionsForAccountResponse = describeBudgetActionsForAccountResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeBudgetActionsForAccountResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeBudgetActionsForAccountResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeBudgetActionsForAccountResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public DescribeBudgetActionsForAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}