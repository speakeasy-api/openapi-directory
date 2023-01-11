package openapisdk.models.operations;



public class DescribeAcceleratorResponse {
    public Object acceleratorNotFoundException;
    public DescribeAcceleratorResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public String contentType;
    public DescribeAcceleratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAcceleratorResponse describeAcceleratorResponse;
    public DescribeAcceleratorResponse withDescribeAcceleratorResponse(openapisdk.models.shared.DescribeAcceleratorResponse describeAcceleratorResponse) {
        this.describeAcceleratorResponse = describeAcceleratorResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DescribeAcceleratorResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DescribeAcceleratorResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public DescribeAcceleratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}