package openapisdk.models.operations;



public class DescribeCompanyNetworkConfigurationResponse {
    public String contentType;
    public DescribeCompanyNetworkConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCompanyNetworkConfigurationResponse describeCompanyNetworkConfigurationResponse;
    public DescribeCompanyNetworkConfigurationResponse withDescribeCompanyNetworkConfigurationResponse(openapisdk.models.shared.DescribeCompanyNetworkConfigurationResponse describeCompanyNetworkConfigurationResponse) {
        this.describeCompanyNetworkConfigurationResponse = describeCompanyNetworkConfigurationResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeCompanyNetworkConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeCompanyNetworkConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeCompanyNetworkConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeCompanyNetworkConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeCompanyNetworkConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeCompanyNetworkConfigurationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}