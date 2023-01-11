package openapisdk.models.operations;



public class ListLicenseConfigurationsResponse {
    public Object accessDeniedException;
    public ListLicenseConfigurationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public ListLicenseConfigurationsResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public ListLicenseConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object filterLimitExceededException;
    public ListLicenseConfigurationsResponse withFilterLimitExceededException(Object filterLimitExceededException) {
        this.filterLimitExceededException = filterLimitExceededException;
        return this;
    }
    public Object invalidParameterValueException;
    public ListLicenseConfigurationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListLicenseConfigurationsResponse listLicenseConfigurationsResponse;
    public ListLicenseConfigurationsResponse withListLicenseConfigurationsResponse(openapisdk.models.shared.ListLicenseConfigurationsResponse listLicenseConfigurationsResponse) {
        this.listLicenseConfigurationsResponse = listLicenseConfigurationsResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public ListLicenseConfigurationsResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public ListLicenseConfigurationsResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public ListLicenseConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}