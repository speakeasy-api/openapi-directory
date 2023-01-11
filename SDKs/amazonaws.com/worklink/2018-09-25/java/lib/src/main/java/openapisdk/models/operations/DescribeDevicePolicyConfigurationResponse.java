package openapisdk.models.operations;



public class DescribeDevicePolicyConfigurationResponse {
    public String contentType;
    public DescribeDevicePolicyConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDevicePolicyConfigurationResponse describeDevicePolicyConfigurationResponse;
    public DescribeDevicePolicyConfigurationResponse withDescribeDevicePolicyConfigurationResponse(openapisdk.models.shared.DescribeDevicePolicyConfigurationResponse describeDevicePolicyConfigurationResponse) {
        this.describeDevicePolicyConfigurationResponse = describeDevicePolicyConfigurationResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeDevicePolicyConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeDevicePolicyConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDevicePolicyConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDevicePolicyConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeDevicePolicyConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeDevicePolicyConfigurationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}