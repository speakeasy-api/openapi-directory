package openapisdk.models.operations;



public class ListUsageForLicenseConfigurationResponse {
    public Object accessDeniedException;
    public ListUsageForLicenseConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public ListUsageForLicenseConfigurationResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public ListUsageForLicenseConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object filterLimitExceededException;
    public ListUsageForLicenseConfigurationResponse withFilterLimitExceededException(Object filterLimitExceededException) {
        this.filterLimitExceededException = filterLimitExceededException;
        return this;
    }
    public Object invalidParameterValueException;
    public ListUsageForLicenseConfigurationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListUsageForLicenseConfigurationResponse listUsageForLicenseConfigurationResponse;
    public ListUsageForLicenseConfigurationResponse withListUsageForLicenseConfigurationResponse(openapisdk.models.shared.ListUsageForLicenseConfigurationResponse listUsageForLicenseConfigurationResponse) {
        this.listUsageForLicenseConfigurationResponse = listUsageForLicenseConfigurationResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public ListUsageForLicenseConfigurationResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public ListUsageForLicenseConfigurationResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public ListUsageForLicenseConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}