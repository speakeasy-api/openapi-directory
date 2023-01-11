package openapisdk.models.operations;



public class ListLicenseManagerReportGeneratorsResponse {
    public Object accessDeniedException;
    public ListLicenseManagerReportGeneratorsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public ListLicenseManagerReportGeneratorsResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public ListLicenseManagerReportGeneratorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListLicenseManagerReportGeneratorsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListLicenseManagerReportGeneratorsResponse listLicenseManagerReportGeneratorsResponse;
    public ListLicenseManagerReportGeneratorsResponse withListLicenseManagerReportGeneratorsResponse(openapisdk.models.shared.ListLicenseManagerReportGeneratorsResponse listLicenseManagerReportGeneratorsResponse) {
        this.listLicenseManagerReportGeneratorsResponse = listLicenseManagerReportGeneratorsResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public ListLicenseManagerReportGeneratorsResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceLimitExceededException;
    public ListLicenseManagerReportGeneratorsResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListLicenseManagerReportGeneratorsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverInternalException;
    public ListLicenseManagerReportGeneratorsResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public ListLicenseManagerReportGeneratorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListLicenseManagerReportGeneratorsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}