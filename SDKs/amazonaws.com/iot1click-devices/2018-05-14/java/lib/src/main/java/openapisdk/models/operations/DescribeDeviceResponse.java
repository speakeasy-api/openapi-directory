package openapisdk.models.operations;



public class DescribeDeviceResponse {
    public String contentType;
    public DescribeDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDeviceResponse describeDeviceResponse;
    public DescribeDeviceResponse withDescribeDeviceResponse(openapisdk.models.shared.DescribeDeviceResponse describeDeviceResponse) {
        this.describeDeviceResponse = describeDeviceResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeDeviceResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeDeviceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDeviceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}