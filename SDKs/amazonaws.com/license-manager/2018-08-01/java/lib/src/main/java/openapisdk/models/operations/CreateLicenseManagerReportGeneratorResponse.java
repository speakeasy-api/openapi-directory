package openapisdk.models.operations;



public class CreateLicenseManagerReportGeneratorResponse {
    public Object accessDeniedException;
    public CreateLicenseManagerReportGeneratorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public CreateLicenseManagerReportGeneratorResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public CreateLicenseManagerReportGeneratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLicenseManagerReportGeneratorResponse createLicenseManagerReportGeneratorResponse;
    public CreateLicenseManagerReportGeneratorResponse withCreateLicenseManagerReportGeneratorResponse(openapisdk.models.shared.CreateLicenseManagerReportGeneratorResponse createLicenseManagerReportGeneratorResponse) {
        this.createLicenseManagerReportGeneratorResponse = createLicenseManagerReportGeneratorResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateLicenseManagerReportGeneratorResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public CreateLicenseManagerReportGeneratorResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateLicenseManagerReportGeneratorResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateLicenseManagerReportGeneratorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverInternalException;
    public CreateLicenseManagerReportGeneratorResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public CreateLicenseManagerReportGeneratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateLicenseManagerReportGeneratorResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}