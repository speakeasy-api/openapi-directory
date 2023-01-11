package openapisdk.models.operations;



public class DescribeRiskConfigurationResponse {
    public String contentType;
    public DescribeRiskConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRiskConfigurationResponse describeRiskConfigurationResponse;
    public DescribeRiskConfigurationResponse withDescribeRiskConfigurationResponse(openapisdk.models.shared.DescribeRiskConfigurationResponse describeRiskConfigurationResponse) {
        this.describeRiskConfigurationResponse = describeRiskConfigurationResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeRiskConfigurationResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeRiskConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public DescribeRiskConfigurationResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRiskConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRiskConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeRiskConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userPoolAddOnNotEnabledException;
    public DescribeRiskConfigurationResponse withUserPoolAddOnNotEnabledException(Object userPoolAddOnNotEnabledException) {
        this.userPoolAddOnNotEnabledException = userPoolAddOnNotEnabledException;
        return this;
    }
}