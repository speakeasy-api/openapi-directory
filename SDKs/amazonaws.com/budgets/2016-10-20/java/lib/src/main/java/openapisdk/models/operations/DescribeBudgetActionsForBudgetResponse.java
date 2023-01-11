package openapisdk.models.operations;



public class DescribeBudgetActionsForBudgetResponse {
    public Object accessDeniedException;
    public DescribeBudgetActionsForBudgetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeBudgetActionsForBudgetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBudgetActionsForBudgetResponse describeBudgetActionsForBudgetResponse;
    public DescribeBudgetActionsForBudgetResponse withDescribeBudgetActionsForBudgetResponse(openapisdk.models.shared.DescribeBudgetActionsForBudgetResponse describeBudgetActionsForBudgetResponse) {
        this.describeBudgetActionsForBudgetResponse = describeBudgetActionsForBudgetResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeBudgetActionsForBudgetResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeBudgetActionsForBudgetResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeBudgetActionsForBudgetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public DescribeBudgetActionsForBudgetResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeBudgetActionsForBudgetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}