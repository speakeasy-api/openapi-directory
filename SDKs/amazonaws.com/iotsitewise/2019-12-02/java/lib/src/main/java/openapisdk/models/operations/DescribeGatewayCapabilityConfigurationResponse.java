package openapisdk.models.operations;



public class DescribeGatewayCapabilityConfigurationResponse {
    public String contentType;
    public DescribeGatewayCapabilityConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeGatewayCapabilityConfigurationResponse describeGatewayCapabilityConfigurationResponse;
    public DescribeGatewayCapabilityConfigurationResponse withDescribeGatewayCapabilityConfigurationResponse(openapisdk.models.shared.DescribeGatewayCapabilityConfigurationResponse describeGatewayCapabilityConfigurationResponse) {
        this.describeGatewayCapabilityConfigurationResponse = describeGatewayCapabilityConfigurationResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeGatewayCapabilityConfigurationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeGatewayCapabilityConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeGatewayCapabilityConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeGatewayCapabilityConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeGatewayCapabilityConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}