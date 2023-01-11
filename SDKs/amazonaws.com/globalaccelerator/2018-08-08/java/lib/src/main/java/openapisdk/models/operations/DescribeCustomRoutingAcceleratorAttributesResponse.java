package openapisdk.models.operations;



public class DescribeCustomRoutingAcceleratorAttributesResponse {
    public Object acceleratorNotFoundException;
    public DescribeCustomRoutingAcceleratorAttributesResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public String contentType;
    public DescribeCustomRoutingAcceleratorAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCustomRoutingAcceleratorAttributesResponse describeCustomRoutingAcceleratorAttributesResponse;
    public DescribeCustomRoutingAcceleratorAttributesResponse withDescribeCustomRoutingAcceleratorAttributesResponse(openapisdk.models.shared.DescribeCustomRoutingAcceleratorAttributesResponse describeCustomRoutingAcceleratorAttributesResponse) {
        this.describeCustomRoutingAcceleratorAttributesResponse = describeCustomRoutingAcceleratorAttributesResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DescribeCustomRoutingAcceleratorAttributesResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DescribeCustomRoutingAcceleratorAttributesResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public DescribeCustomRoutingAcceleratorAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}