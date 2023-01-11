package openapisdk.models.operations;



public class CreateLicenseResponse {
    public Object accessDeniedException;
    public CreateLicenseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public CreateLicenseResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public CreateLicenseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLicenseResponse createLicenseResponse;
    public CreateLicenseResponse withCreateLicenseResponse(openapisdk.models.shared.CreateLicenseResponse createLicenseResponse) {
        this.createLicenseResponse = createLicenseResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateLicenseResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public CreateLicenseResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object redirectException;
    public CreateLicenseResponse withRedirectException(Object redirectException) {
        this.redirectException = redirectException;
        return this;
    }
    public Object serverInternalException;
    public CreateLicenseResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public CreateLicenseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateLicenseResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}