package openapisdk.models.operations;



public class DescribeLogStreamsResponse {
    public String contentType;
    public DescribeLogStreamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLogStreamsResponse describeLogStreamsResponse;
    public DescribeLogStreamsResponse withDescribeLogStreamsResponse(openapisdk.models.shared.DescribeLogStreamsResponse describeLogStreamsResponse) {
        this.describeLogStreamsResponse = describeLogStreamsResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeLogStreamsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeLogStreamsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeLogStreamsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeLogStreamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}