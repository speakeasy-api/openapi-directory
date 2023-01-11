package openapisdk.models.operations;



public class GetLicenseManagerReportGeneratorResponse {
    public Object accessDeniedException;
    public GetLicenseManagerReportGeneratorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public GetLicenseManagerReportGeneratorResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public GetLicenseManagerReportGeneratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLicenseManagerReportGeneratorResponse getLicenseManagerReportGeneratorResponse;
    public GetLicenseManagerReportGeneratorResponse withGetLicenseManagerReportGeneratorResponse(openapisdk.models.shared.GetLicenseManagerReportGeneratorResponse getLicenseManagerReportGeneratorResponse) {
        this.getLicenseManagerReportGeneratorResponse = getLicenseManagerReportGeneratorResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetLicenseManagerReportGeneratorResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public GetLicenseManagerReportGeneratorResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceLimitExceededException;
    public GetLicenseManagerReportGeneratorResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLicenseManagerReportGeneratorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverInternalException;
    public GetLicenseManagerReportGeneratorResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public GetLicenseManagerReportGeneratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetLicenseManagerReportGeneratorResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}