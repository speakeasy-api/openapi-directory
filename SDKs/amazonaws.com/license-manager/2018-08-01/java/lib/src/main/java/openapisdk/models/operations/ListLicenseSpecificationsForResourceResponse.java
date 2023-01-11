package openapisdk.models.operations;



public class ListLicenseSpecificationsForResourceResponse {
    public Object accessDeniedException;
    public ListLicenseSpecificationsForResourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public ListLicenseSpecificationsForResourceResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public ListLicenseSpecificationsForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListLicenseSpecificationsForResourceResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListLicenseSpecificationsForResourceResponse listLicenseSpecificationsForResourceResponse;
    public ListLicenseSpecificationsForResourceResponse withListLicenseSpecificationsForResourceResponse(openapisdk.models.shared.ListLicenseSpecificationsForResourceResponse listLicenseSpecificationsForResourceResponse) {
        this.listLicenseSpecificationsForResourceResponse = listLicenseSpecificationsForResourceResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public ListLicenseSpecificationsForResourceResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public ListLicenseSpecificationsForResourceResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public ListLicenseSpecificationsForResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}