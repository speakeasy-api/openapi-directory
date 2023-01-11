package openapisdk.models.operations;



public class DescribeResourceServerResponse {
    public String contentType;
    public DescribeResourceServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeResourceServerResponse describeResourceServerResponse;
    public DescribeResourceServerResponse withDescribeResourceServerResponse(openapisdk.models.shared.DescribeResourceServerResponse describeResourceServerResponse) {
        this.describeResourceServerResponse = describeResourceServerResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeResourceServerResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeResourceServerResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public DescribeResourceServerResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeResourceServerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeResourceServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeResourceServerResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}