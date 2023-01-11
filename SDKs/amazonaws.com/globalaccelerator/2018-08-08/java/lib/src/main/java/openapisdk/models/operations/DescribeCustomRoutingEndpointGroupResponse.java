package openapisdk.models.operations;



public class DescribeCustomRoutingEndpointGroupResponse {
    public String contentType;
    public DescribeCustomRoutingEndpointGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCustomRoutingEndpointGroupResponse describeCustomRoutingEndpointGroupResponse;
    public DescribeCustomRoutingEndpointGroupResponse withDescribeCustomRoutingEndpointGroupResponse(openapisdk.models.shared.DescribeCustomRoutingEndpointGroupResponse describeCustomRoutingEndpointGroupResponse) {
        this.describeCustomRoutingEndpointGroupResponse = describeCustomRoutingEndpointGroupResponse;
        return this;
    }
    public Object endpointGroupNotFoundException;
    public DescribeCustomRoutingEndpointGroupResponse withEndpointGroupNotFoundException(Object endpointGroupNotFoundException) {
        this.endpointGroupNotFoundException = endpointGroupNotFoundException;
        return this;
    }
    public Object internalServiceErrorException;
    public DescribeCustomRoutingEndpointGroupResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DescribeCustomRoutingEndpointGroupResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public DescribeCustomRoutingEndpointGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}