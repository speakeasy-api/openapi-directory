package openapisdk.models.operations;



public class DescribeIdentityPoolResponse {
    public String contentType;
    public DescribeIdentityPoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IdentityPool identityPool;
    public DescribeIdentityPoolResponse withIdentityPool(openapisdk.models.shared.IdentityPool identityPool) {
        this.identityPool = identityPool;
        return this;
    }
    public Object internalErrorException;
    public DescribeIdentityPoolResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeIdentityPoolResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public DescribeIdentityPoolResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeIdentityPoolResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeIdentityPoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeIdentityPoolResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}