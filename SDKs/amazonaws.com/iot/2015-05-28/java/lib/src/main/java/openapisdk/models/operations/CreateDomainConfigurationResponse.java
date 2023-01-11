package openapisdk.models.operations;



public class CreateDomainConfigurationResponse {
    public Object certificateValidationException;
    public CreateDomainConfigurationResponse withCertificateValidationException(Object certificateValidationException) {
        this.certificateValidationException = certificateValidationException;
        return this;
    }
    public String contentType;
    public CreateDomainConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDomainConfigurationResponse createDomainConfigurationResponse;
    public CreateDomainConfigurationResponse withCreateDomainConfigurationResponse(openapisdk.models.shared.CreateDomainConfigurationResponse createDomainConfigurationResponse) {
        this.createDomainConfigurationResponse = createDomainConfigurationResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateDomainConfigurationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateDomainConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateDomainConfigurationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateDomainConfigurationResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateDomainConfigurationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateDomainConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateDomainConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public CreateDomainConfigurationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}