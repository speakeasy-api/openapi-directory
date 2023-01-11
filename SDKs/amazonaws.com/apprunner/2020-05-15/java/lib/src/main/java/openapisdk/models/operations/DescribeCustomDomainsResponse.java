package openapisdk.models.operations;



public class DescribeCustomDomainsResponse {
    public String contentType;
    public DescribeCustomDomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCustomDomainsResponse describeCustomDomainsResponse;
    public DescribeCustomDomainsResponse withDescribeCustomDomainsResponse(openapisdk.models.shared.DescribeCustomDomainsResponse describeCustomDomainsResponse) {
        this.describeCustomDomainsResponse = describeCustomDomainsResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DescribeCustomDomainsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeCustomDomainsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeCustomDomainsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeCustomDomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}