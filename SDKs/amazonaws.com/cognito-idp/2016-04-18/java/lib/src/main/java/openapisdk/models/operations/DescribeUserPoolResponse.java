package openapisdk.models.operations;



public class DescribeUserPoolResponse {
    public String contentType;
    public DescribeUserPoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeUserPoolResponse describeUserPoolResponse;
    public DescribeUserPoolResponse withDescribeUserPoolResponse(openapisdk.models.shared.DescribeUserPoolResponse describeUserPoolResponse) {
        this.describeUserPoolResponse = describeUserPoolResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeUserPoolResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeUserPoolResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public DescribeUserPoolResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeUserPoolResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeUserPoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeUserPoolResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userPoolTaggingException;
    public DescribeUserPoolResponse withUserPoolTaggingException(Object userPoolTaggingException) {
        this.userPoolTaggingException = userPoolTaggingException;
        return this;
    }
}