package openapisdk.models.operations;



public class DescribeEventBusResponse {
    public String contentType;
    public DescribeEventBusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEventBusResponse describeEventBusResponse;
    public DescribeEventBusResponse withDescribeEventBusResponse(openapisdk.models.shared.DescribeEventBusResponse describeEventBusResponse) {
        this.describeEventBusResponse = describeEventBusResponse;
        return this;
    }
    public Object internalException;
    public DescribeEventBusResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeEventBusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeEventBusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}