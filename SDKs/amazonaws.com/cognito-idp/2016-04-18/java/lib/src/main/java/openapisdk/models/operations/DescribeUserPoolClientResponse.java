package openapisdk.models.operations;



public class DescribeUserPoolClientResponse {
    public String contentType;
    public DescribeUserPoolClientResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeUserPoolClientResponse describeUserPoolClientResponse;
    public DescribeUserPoolClientResponse withDescribeUserPoolClientResponse(openapisdk.models.shared.DescribeUserPoolClientResponse describeUserPoolClientResponse) {
        this.describeUserPoolClientResponse = describeUserPoolClientResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeUserPoolClientResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeUserPoolClientResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public DescribeUserPoolClientResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeUserPoolClientResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeUserPoolClientResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeUserPoolClientResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}