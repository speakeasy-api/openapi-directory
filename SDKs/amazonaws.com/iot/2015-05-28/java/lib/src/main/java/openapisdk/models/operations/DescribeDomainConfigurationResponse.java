package openapisdk.models.operations;



public class DescribeDomainConfigurationResponse {
    public String contentType;
    public DescribeDomainConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDomainConfigurationResponse describeDomainConfigurationResponse;
    public DescribeDomainConfigurationResponse withDescribeDomainConfigurationResponse(openapisdk.models.shared.DescribeDomainConfigurationResponse describeDomainConfigurationResponse) {
        this.describeDomainConfigurationResponse = describeDomainConfigurationResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeDomainConfigurationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeDomainConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDomainConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeDomainConfigurationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeDomainConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeDomainConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeDomainConfigurationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}