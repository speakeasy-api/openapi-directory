package openapisdk.models.operations;



public class DescribeListenerResponse {
    public String contentType;
    public DescribeListenerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeListenerResponse describeListenerResponse;
    public DescribeListenerResponse withDescribeListenerResponse(openapisdk.models.shared.DescribeListenerResponse describeListenerResponse) {
        this.describeListenerResponse = describeListenerResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DescribeListenerResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DescribeListenerResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object listenerNotFoundException;
    public DescribeListenerResponse withListenerNotFoundException(Object listenerNotFoundException) {
        this.listenerNotFoundException = listenerNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeListenerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}