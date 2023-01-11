package openapisdk.models.operations;



public class ListFailuresForLicenseConfigurationOperationsResponse {
    public Object accessDeniedException;
    public ListFailuresForLicenseConfigurationOperationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public ListFailuresForLicenseConfigurationOperationsResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public ListFailuresForLicenseConfigurationOperationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListFailuresForLicenseConfigurationOperationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListFailuresForLicenseConfigurationOperationsResponse listFailuresForLicenseConfigurationOperationsResponse;
    public ListFailuresForLicenseConfigurationOperationsResponse withListFailuresForLicenseConfigurationOperationsResponse(openapisdk.models.shared.ListFailuresForLicenseConfigurationOperationsResponse listFailuresForLicenseConfigurationOperationsResponse) {
        this.listFailuresForLicenseConfigurationOperationsResponse = listFailuresForLicenseConfigurationOperationsResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public ListFailuresForLicenseConfigurationOperationsResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public ListFailuresForLicenseConfigurationOperationsResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public ListFailuresForLicenseConfigurationOperationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}