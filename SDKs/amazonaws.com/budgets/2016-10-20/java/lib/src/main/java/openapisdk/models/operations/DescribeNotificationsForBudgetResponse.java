package openapisdk.models.operations;



public class DescribeNotificationsForBudgetResponse {
    public Object accessDeniedException;
    public DescribeNotificationsForBudgetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeNotificationsForBudgetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeNotificationsForBudgetResponse describeNotificationsForBudgetResponse;
    public DescribeNotificationsForBudgetResponse withDescribeNotificationsForBudgetResponse(openapisdk.models.shared.DescribeNotificationsForBudgetResponse describeNotificationsForBudgetResponse) {
        this.describeNotificationsForBudgetResponse = describeNotificationsForBudgetResponse;
        return this;
    }
    public Object expiredNextTokenException;
    public DescribeNotificationsForBudgetResponse withExpiredNextTokenException(Object expiredNextTokenException) {
        this.expiredNextTokenException = expiredNextTokenException;
        return this;
    }
    public Object internalErrorException;
    public DescribeNotificationsForBudgetResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeNotificationsForBudgetResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeNotificationsForBudgetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public DescribeNotificationsForBudgetResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeNotificationsForBudgetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}