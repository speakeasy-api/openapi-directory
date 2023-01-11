package openapisdk.models.operations;



public class DescribeIdentityPoolUsageResponse {
    public String contentType;
    public DescribeIdentityPoolUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeIdentityPoolUsageResponse describeIdentityPoolUsageResponse;
    public DescribeIdentityPoolUsageResponse withDescribeIdentityPoolUsageResponse(openapisdk.models.shared.DescribeIdentityPoolUsageResponse describeIdentityPoolUsageResponse) {
        this.describeIdentityPoolUsageResponse = describeIdentityPoolUsageResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeIdentityPoolUsageResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeIdentityPoolUsageResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public DescribeIdentityPoolUsageResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeIdentityPoolUsageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeIdentityPoolUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeIdentityPoolUsageResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}