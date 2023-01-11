package openapisdk.models.operations;



public class CreateLicenseVersionResponse {
    public Object accessDeniedException;
    public CreateLicenseVersionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public CreateLicenseVersionResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public Object conflictException;
    public CreateLicenseVersionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateLicenseVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLicenseVersionResponse createLicenseVersionResponse;
    public CreateLicenseVersionResponse withCreateLicenseVersionResponse(openapisdk.models.shared.CreateLicenseVersionResponse createLicenseVersionResponse) {
        this.createLicenseVersionResponse = createLicenseVersionResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public CreateLicenseVersionResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object redirectException;
    public CreateLicenseVersionResponse withRedirectException(Object redirectException) {
        this.redirectException = redirectException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateLicenseVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverInternalException;
    public CreateLicenseVersionResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public CreateLicenseVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateLicenseVersionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}