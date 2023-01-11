package openapisdk.models.operations;



public class DescribeConnectionResponse {
    public String contentType;
    public DescribeConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConnectionResponse describeConnectionResponse;
    public DescribeConnectionResponse withDescribeConnectionResponse(openapisdk.models.shared.DescribeConnectionResponse describeConnectionResponse) {
        this.describeConnectionResponse = describeConnectionResponse;
        return this;
    }
    public Object internalException;
    public DescribeConnectionResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeConnectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}