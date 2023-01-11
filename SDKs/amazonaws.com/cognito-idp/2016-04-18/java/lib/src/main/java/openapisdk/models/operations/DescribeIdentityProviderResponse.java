package openapisdk.models.operations;



public class DescribeIdentityProviderResponse {
    public String contentType;
    public DescribeIdentityProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeIdentityProviderResponse describeIdentityProviderResponse;
    public DescribeIdentityProviderResponse withDescribeIdentityProviderResponse(openapisdk.models.shared.DescribeIdentityProviderResponse describeIdentityProviderResponse) {
        this.describeIdentityProviderResponse = describeIdentityProviderResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeIdentityProviderResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeIdentityProviderResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public DescribeIdentityProviderResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeIdentityProviderResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeIdentityProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeIdentityProviderResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}