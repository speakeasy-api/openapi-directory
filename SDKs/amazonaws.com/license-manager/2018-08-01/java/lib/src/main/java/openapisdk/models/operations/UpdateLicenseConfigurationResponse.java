package openapisdk.models.operations;



public class UpdateLicenseConfigurationResponse {
    public Object accessDeniedException;
    public UpdateLicenseConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public UpdateLicenseConfigurationResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public UpdateLicenseConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public UpdateLicenseConfigurationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public UpdateLicenseConfigurationResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceLimitExceededException;
    public UpdateLicenseConfigurationResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public UpdateLicenseConfigurationResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public UpdateLicenseConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateLicenseConfigurationResponse;
    public UpdateLicenseConfigurationResponse withUpdateLicenseConfigurationResponse(java.util.Map<String, Object> updateLicenseConfigurationResponse) {
        this.updateLicenseConfigurationResponse = updateLicenseConfigurationResponse;
        return this;
    }
}