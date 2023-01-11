package openapisdk.models.operations;



public class DeleteLicenseConfigurationResponse {
    public Object accessDeniedException;
    public DeleteLicenseConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public DeleteLicenseConfigurationResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public DeleteLicenseConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteLicenseConfigurationResponse;
    public DeleteLicenseConfigurationResponse withDeleteLicenseConfigurationResponse(java.util.Map<String, Object> deleteLicenseConfigurationResponse) {
        this.deleteLicenseConfigurationResponse = deleteLicenseConfigurationResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteLicenseConfigurationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public DeleteLicenseConfigurationResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public DeleteLicenseConfigurationResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public DeleteLicenseConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}