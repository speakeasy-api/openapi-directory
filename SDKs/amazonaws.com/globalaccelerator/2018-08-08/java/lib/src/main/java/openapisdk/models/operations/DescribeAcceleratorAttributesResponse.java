package openapisdk.models.operations;



public class DescribeAcceleratorAttributesResponse {
    public Object acceleratorNotFoundException;
    public DescribeAcceleratorAttributesResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public String contentType;
    public DescribeAcceleratorAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAcceleratorAttributesResponse describeAcceleratorAttributesResponse;
    public DescribeAcceleratorAttributesResponse withDescribeAcceleratorAttributesResponse(openapisdk.models.shared.DescribeAcceleratorAttributesResponse describeAcceleratorAttributesResponse) {
        this.describeAcceleratorAttributesResponse = describeAcceleratorAttributesResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DescribeAcceleratorAttributesResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DescribeAcceleratorAttributesResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public DescribeAcceleratorAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}