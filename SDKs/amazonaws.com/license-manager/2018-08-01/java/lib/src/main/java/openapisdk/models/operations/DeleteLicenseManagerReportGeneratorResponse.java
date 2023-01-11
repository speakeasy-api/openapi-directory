package openapisdk.models.operations;



public class DeleteLicenseManagerReportGeneratorResponse {
    public Object accessDeniedException;
    public DeleteLicenseManagerReportGeneratorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public DeleteLicenseManagerReportGeneratorResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public DeleteLicenseManagerReportGeneratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteLicenseManagerReportGeneratorResponse;
    public DeleteLicenseManagerReportGeneratorResponse withDeleteLicenseManagerReportGeneratorResponse(java.util.Map<String, Object> deleteLicenseManagerReportGeneratorResponse) {
        this.deleteLicenseManagerReportGeneratorResponse = deleteLicenseManagerReportGeneratorResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteLicenseManagerReportGeneratorResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public DeleteLicenseManagerReportGeneratorResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceLimitExceededException;
    public DeleteLicenseManagerReportGeneratorResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteLicenseManagerReportGeneratorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverInternalException;
    public DeleteLicenseManagerReportGeneratorResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public DeleteLicenseManagerReportGeneratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteLicenseManagerReportGeneratorResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}