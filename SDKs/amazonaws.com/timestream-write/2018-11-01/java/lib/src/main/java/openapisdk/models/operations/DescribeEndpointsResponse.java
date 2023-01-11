package openapisdk.models.operations;



public class DescribeEndpointsResponse {
    public String contentType;
    public DescribeEndpointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEndpointsResponse describeEndpointsResponse;
    public DescribeEndpointsResponse withDescribeEndpointsResponse(openapisdk.models.shared.DescribeEndpointsResponse describeEndpointsResponse) {
        this.describeEndpointsResponse = describeEndpointsResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeEndpointsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DescribeEndpointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeEndpointsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeEndpointsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}