package openapisdk.models.operations;



public class CheckInLicenseResponse {
    public Object accessDeniedException;
    public CheckInLicenseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public CheckInLicenseResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public java.util.Map<String, Object> checkInLicenseResponse;
    public CheckInLicenseResponse withCheckInLicenseResponse(java.util.Map<String, Object> checkInLicenseResponse) {
        this.checkInLicenseResponse = checkInLicenseResponse;
        return this;
    }
    public Object conflictException;
    public CheckInLicenseResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CheckInLicenseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public CheckInLicenseResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public CheckInLicenseResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CheckInLicenseResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverInternalException;
    public CheckInLicenseResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public CheckInLicenseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CheckInLicenseResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}