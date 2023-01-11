package openapisdk.models.operations;



public class DescribeNamespaceResponse {
    public String contentType;
    public DescribeNamespaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeNamespaceResponse describeNamespaceResponse;
    public DescribeNamespaceResponse withDescribeNamespaceResponse(openapisdk.models.shared.DescribeNamespaceResponse describeNamespaceResponse) {
        this.describeNamespaceResponse = describeNamespaceResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeNamespaceResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeNamespaceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeNamespaceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeNamespaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeNamespaceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}