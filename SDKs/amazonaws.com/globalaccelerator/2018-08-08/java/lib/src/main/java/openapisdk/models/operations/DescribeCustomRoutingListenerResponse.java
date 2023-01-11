package openapisdk.models.operations;



public class DescribeCustomRoutingListenerResponse {
    public String contentType;
    public DescribeCustomRoutingListenerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCustomRoutingListenerResponse describeCustomRoutingListenerResponse;
    public DescribeCustomRoutingListenerResponse withDescribeCustomRoutingListenerResponse(openapisdk.models.shared.DescribeCustomRoutingListenerResponse describeCustomRoutingListenerResponse) {
        this.describeCustomRoutingListenerResponse = describeCustomRoutingListenerResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DescribeCustomRoutingListenerResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DescribeCustomRoutingListenerResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object listenerNotFoundException;
    public DescribeCustomRoutingListenerResponse withListenerNotFoundException(Object listenerNotFoundException) {
        this.listenerNotFoundException = listenerNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeCustomRoutingListenerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}