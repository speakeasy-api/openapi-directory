package openapisdk.models.operations;



public class ListLicensesResponse {
    public Object accessDeniedException;
    public ListLicensesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public ListLicensesResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public ListLicensesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListLicensesResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListLicensesResponse listLicensesResponse;
    public ListLicensesResponse withListLicensesResponse(openapisdk.models.shared.ListLicensesResponse listLicensesResponse) {
        this.listLicensesResponse = listLicensesResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public ListLicensesResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public ListLicensesResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public ListLicensesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListLicensesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}