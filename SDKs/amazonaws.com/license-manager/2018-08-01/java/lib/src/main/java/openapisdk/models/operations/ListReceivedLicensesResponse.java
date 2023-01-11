package openapisdk.models.operations;



public class ListReceivedLicensesResponse {
    public Object accessDeniedException;
    public ListReceivedLicensesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public ListReceivedLicensesResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public ListReceivedLicensesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListReceivedLicensesResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListReceivedLicensesResponse listReceivedLicensesResponse;
    public ListReceivedLicensesResponse withListReceivedLicensesResponse(openapisdk.models.shared.ListReceivedLicensesResponse listReceivedLicensesResponse) {
        this.listReceivedLicensesResponse = listReceivedLicensesResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public ListReceivedLicensesResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceLimitExceededException;
    public ListReceivedLicensesResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public ListReceivedLicensesResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public ListReceivedLicensesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListReceivedLicensesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}