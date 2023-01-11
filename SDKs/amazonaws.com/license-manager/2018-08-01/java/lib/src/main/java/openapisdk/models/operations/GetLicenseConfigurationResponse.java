package openapisdk.models.operations;



public class GetLicenseConfigurationResponse {
    public Object accessDeniedException;
    public GetLicenseConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public GetLicenseConfigurationResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public GetLicenseConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLicenseConfigurationResponse getLicenseConfigurationResponse;
    public GetLicenseConfigurationResponse withGetLicenseConfigurationResponse(openapisdk.models.shared.GetLicenseConfigurationResponse getLicenseConfigurationResponse) {
        this.getLicenseConfigurationResponse = getLicenseConfigurationResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetLicenseConfigurationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public GetLicenseConfigurationResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public GetLicenseConfigurationResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public GetLicenseConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}