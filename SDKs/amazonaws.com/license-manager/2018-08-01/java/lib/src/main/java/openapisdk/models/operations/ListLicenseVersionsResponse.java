package openapisdk.models.operations;



public class ListLicenseVersionsResponse {
    public Object accessDeniedException;
    public ListLicenseVersionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public ListLicenseVersionsResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public ListLicenseVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListLicenseVersionsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListLicenseVersionsResponse listLicenseVersionsResponse;
    public ListLicenseVersionsResponse withListLicenseVersionsResponse(openapisdk.models.shared.ListLicenseVersionsResponse listLicenseVersionsResponse) {
        this.listLicenseVersionsResponse = listLicenseVersionsResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public ListLicenseVersionsResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public ListLicenseVersionsResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public ListLicenseVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}