package openapisdk.models.operations;



public class DescribeIdentityProviderConfigurationResponse {
    public String contentType;
    public DescribeIdentityProviderConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeIdentityProviderConfigurationResponse describeIdentityProviderConfigurationResponse;
    public DescribeIdentityProviderConfigurationResponse withDescribeIdentityProviderConfigurationResponse(openapisdk.models.shared.DescribeIdentityProviderConfigurationResponse describeIdentityProviderConfigurationResponse) {
        this.describeIdentityProviderConfigurationResponse = describeIdentityProviderConfigurationResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeIdentityProviderConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeIdentityProviderConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeIdentityProviderConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeIdentityProviderConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeIdentityProviderConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeIdentityProviderConfigurationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}