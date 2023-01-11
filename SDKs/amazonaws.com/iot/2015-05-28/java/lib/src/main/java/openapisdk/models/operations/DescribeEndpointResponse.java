package openapisdk.models.operations;



public class DescribeEndpointResponse {
    public String contentType;
    public DescribeEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEndpointResponse describeEndpointResponse;
    public DescribeEndpointResponse withDescribeEndpointResponse(openapisdk.models.shared.DescribeEndpointResponse describeEndpointResponse) {
        this.describeEndpointResponse = describeEndpointResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeEndpointResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeEndpointResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeEndpointResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeEndpointResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}