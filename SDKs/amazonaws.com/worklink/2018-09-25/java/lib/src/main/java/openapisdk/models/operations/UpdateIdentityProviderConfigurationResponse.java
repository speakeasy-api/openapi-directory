package openapisdk.models.operations;



public class UpdateIdentityProviderConfigurationResponse {
    public String contentType;
    public UpdateIdentityProviderConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateIdentityProviderConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateIdentityProviderConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateIdentityProviderConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateIdentityProviderConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateIdentityProviderConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public UpdateIdentityProviderConfigurationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public java.util.Map<String, Object> updateIdentityProviderConfigurationResponse;
    public UpdateIdentityProviderConfigurationResponse withUpdateIdentityProviderConfigurationResponse(java.util.Map<String, Object> updateIdentityProviderConfigurationResponse) {
        this.updateIdentityProviderConfigurationResponse = updateIdentityProviderConfigurationResponse;
        return this;
    }
}