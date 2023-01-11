package openapisdk.models.operations;



public class DescribeCustomRoutingAcceleratorResponse {
    public Object acceleratorNotFoundException;
    public DescribeCustomRoutingAcceleratorResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public String contentType;
    public DescribeCustomRoutingAcceleratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCustomRoutingAcceleratorResponse describeCustomRoutingAcceleratorResponse;
    public DescribeCustomRoutingAcceleratorResponse withDescribeCustomRoutingAcceleratorResponse(openapisdk.models.shared.DescribeCustomRoutingAcceleratorResponse describeCustomRoutingAcceleratorResponse) {
        this.describeCustomRoutingAcceleratorResponse = describeCustomRoutingAcceleratorResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DescribeCustomRoutingAcceleratorResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DescribeCustomRoutingAcceleratorResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public DescribeCustomRoutingAcceleratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}