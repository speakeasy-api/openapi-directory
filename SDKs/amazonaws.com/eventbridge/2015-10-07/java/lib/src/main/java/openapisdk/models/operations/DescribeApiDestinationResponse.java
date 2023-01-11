package openapisdk.models.operations;



public class DescribeApiDestinationResponse {
    public String contentType;
    public DescribeApiDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeApiDestinationResponse describeApiDestinationResponse;
    public DescribeApiDestinationResponse withDescribeApiDestinationResponse(openapisdk.models.shared.DescribeApiDestinationResponse describeApiDestinationResponse) {
        this.describeApiDestinationResponse = describeApiDestinationResponse;
        return this;
    }
    public Object internalException;
    public DescribeApiDestinationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeApiDestinationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeApiDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}