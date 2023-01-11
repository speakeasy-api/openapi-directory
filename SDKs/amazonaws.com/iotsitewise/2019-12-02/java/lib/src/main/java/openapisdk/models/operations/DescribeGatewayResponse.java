package openapisdk.models.operations;



public class DescribeGatewayResponse {
    public String contentType;
    public DescribeGatewayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeGatewayResponse describeGatewayResponse;
    public DescribeGatewayResponse withDescribeGatewayResponse(openapisdk.models.shared.DescribeGatewayResponse describeGatewayResponse) {
        this.describeGatewayResponse = describeGatewayResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeGatewayResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeGatewayResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeGatewayResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeGatewayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeGatewayResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}