package openapisdk.models.operations;



public class DeleteLicenseResponse {
    public Object accessDeniedException;
    public DeleteLicenseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public DeleteLicenseResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public Object conflictException;
    public DeleteLicenseResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteLicenseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteLicenseResponse deleteLicenseResponse;
    public DeleteLicenseResponse withDeleteLicenseResponse(openapisdk.models.shared.DeleteLicenseResponse deleteLicenseResponse) {
        this.deleteLicenseResponse = deleteLicenseResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteLicenseResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public DeleteLicenseResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object redirectException;
    public DeleteLicenseResponse withRedirectException(Object redirectException) {
        this.redirectException = redirectException;
        return this;
    }
    public Object serverInternalException;
    public DeleteLicenseResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public DeleteLicenseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteLicenseResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}