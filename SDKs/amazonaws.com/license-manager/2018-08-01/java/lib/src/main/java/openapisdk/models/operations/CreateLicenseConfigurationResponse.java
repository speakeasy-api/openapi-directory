package openapisdk.models.operations;



public class CreateLicenseConfigurationResponse {
    public Object accessDeniedException;
    public CreateLicenseConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public CreateLicenseConfigurationResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public CreateLicenseConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLicenseConfigurationResponse createLicenseConfigurationResponse;
    public CreateLicenseConfigurationResponse withCreateLicenseConfigurationResponse(openapisdk.models.shared.CreateLicenseConfigurationResponse createLicenseConfigurationResponse) {
        this.createLicenseConfigurationResponse = createLicenseConfigurationResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateLicenseConfigurationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public CreateLicenseConfigurationResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateLicenseConfigurationResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public CreateLicenseConfigurationResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public CreateLicenseConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}