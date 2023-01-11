package openapisdk.models.operations;



public class DescribeDefaultAuthorizerResponse {
    public String contentType;
    public DescribeDefaultAuthorizerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDefaultAuthorizerResponse describeDefaultAuthorizerResponse;
    public DescribeDefaultAuthorizerResponse withDescribeDefaultAuthorizerResponse(openapisdk.models.shared.DescribeDefaultAuthorizerResponse describeDefaultAuthorizerResponse) {
        this.describeDefaultAuthorizerResponse = describeDefaultAuthorizerResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeDefaultAuthorizerResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeDefaultAuthorizerResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDefaultAuthorizerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeDefaultAuthorizerResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeDefaultAuthorizerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeDefaultAuthorizerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeDefaultAuthorizerResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}