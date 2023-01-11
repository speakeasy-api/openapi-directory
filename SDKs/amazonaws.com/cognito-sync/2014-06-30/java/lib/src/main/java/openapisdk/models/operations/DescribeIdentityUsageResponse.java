package openapisdk.models.operations;



public class DescribeIdentityUsageResponse {
    public String contentType;
    public DescribeIdentityUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeIdentityUsageResponse describeIdentityUsageResponse;
    public DescribeIdentityUsageResponse withDescribeIdentityUsageResponse(openapisdk.models.shared.DescribeIdentityUsageResponse describeIdentityUsageResponse) {
        this.describeIdentityUsageResponse = describeIdentityUsageResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeIdentityUsageResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeIdentityUsageResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public DescribeIdentityUsageResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeIdentityUsageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeIdentityUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeIdentityUsageResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}