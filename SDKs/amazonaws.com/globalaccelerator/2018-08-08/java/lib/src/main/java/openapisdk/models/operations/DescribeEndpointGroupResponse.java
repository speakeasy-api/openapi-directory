package openapisdk.models.operations;



public class DescribeEndpointGroupResponse {
    public String contentType;
    public DescribeEndpointGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEndpointGroupResponse describeEndpointGroupResponse;
    public DescribeEndpointGroupResponse withDescribeEndpointGroupResponse(openapisdk.models.shared.DescribeEndpointGroupResponse describeEndpointGroupResponse) {
        this.describeEndpointGroupResponse = describeEndpointGroupResponse;
        return this;
    }
    public Object endpointGroupNotFoundException;
    public DescribeEndpointGroupResponse withEndpointGroupNotFoundException(Object endpointGroupNotFoundException) {
        this.endpointGroupNotFoundException = endpointGroupNotFoundException;
        return this;
    }
    public Object internalServiceErrorException;
    public DescribeEndpointGroupResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DescribeEndpointGroupResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public DescribeEndpointGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}