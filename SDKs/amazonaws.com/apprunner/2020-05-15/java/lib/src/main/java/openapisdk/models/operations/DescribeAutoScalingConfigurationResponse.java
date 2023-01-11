package openapisdk.models.operations;



public class DescribeAutoScalingConfigurationResponse {
    public String contentType;
    public DescribeAutoScalingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAutoScalingConfigurationResponse describeAutoScalingConfigurationResponse;
    public DescribeAutoScalingConfigurationResponse withDescribeAutoScalingConfigurationResponse(openapisdk.models.shared.DescribeAutoScalingConfigurationResponse describeAutoScalingConfigurationResponse) {
        this.describeAutoScalingConfigurationResponse = describeAutoScalingConfigurationResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DescribeAutoScalingConfigurationResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAutoScalingConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAutoScalingConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAutoScalingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}