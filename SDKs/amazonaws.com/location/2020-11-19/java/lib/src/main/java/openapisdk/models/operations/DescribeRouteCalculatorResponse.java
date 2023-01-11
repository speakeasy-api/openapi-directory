package openapisdk.models.operations;



public class DescribeRouteCalculatorResponse {
    public Object accessDeniedException;
    public DescribeRouteCalculatorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeRouteCalculatorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRouteCalculatorResponse describeRouteCalculatorResponse;
    public DescribeRouteCalculatorResponse withDescribeRouteCalculatorResponse(openapisdk.models.shared.DescribeRouteCalculatorResponse describeRouteCalculatorResponse) {
        this.describeRouteCalculatorResponse = describeRouteCalculatorResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeRouteCalculatorResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRouteCalculatorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRouteCalculatorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeRouteCalculatorResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeRouteCalculatorResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}