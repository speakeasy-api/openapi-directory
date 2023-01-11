package openapisdk.models.operations;



public class DescribeUserPoolDomainResponse {
    public String contentType;
    public DescribeUserPoolDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeUserPoolDomainResponse describeUserPoolDomainResponse;
    public DescribeUserPoolDomainResponse withDescribeUserPoolDomainResponse(openapisdk.models.shared.DescribeUserPoolDomainResponse describeUserPoolDomainResponse) {
        this.describeUserPoolDomainResponse = describeUserPoolDomainResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeUserPoolDomainResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeUserPoolDomainResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public DescribeUserPoolDomainResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeUserPoolDomainResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeUserPoolDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}