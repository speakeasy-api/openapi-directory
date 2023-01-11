package openapisdk.models.operations;



public class ListAssociationsForLicenseConfigurationResponse {
    public Object accessDeniedException;
    public ListAssociationsForLicenseConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public ListAssociationsForLicenseConfigurationResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public ListAssociationsForLicenseConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object filterLimitExceededException;
    public ListAssociationsForLicenseConfigurationResponse withFilterLimitExceededException(Object filterLimitExceededException) {
        this.filterLimitExceededException = filterLimitExceededException;
        return this;
    }
    public Object invalidParameterValueException;
    public ListAssociationsForLicenseConfigurationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListAssociationsForLicenseConfigurationResponse listAssociationsForLicenseConfigurationResponse;
    public ListAssociationsForLicenseConfigurationResponse withListAssociationsForLicenseConfigurationResponse(openapisdk.models.shared.ListAssociationsForLicenseConfigurationResponse listAssociationsForLicenseConfigurationResponse) {
        this.listAssociationsForLicenseConfigurationResponse = listAssociationsForLicenseConfigurationResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public ListAssociationsForLicenseConfigurationResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public ListAssociationsForLicenseConfigurationResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public ListAssociationsForLicenseConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}