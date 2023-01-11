package openapisdk.models.operations;



public class AdminSetUserMfaPreferenceResponse {
    public java.util.Map<String, Object> adminSetUserMFAPreferenceResponse;
    public AdminSetUserMfaPreferenceResponse withAdminSetUserMfaPreferenceResponse(java.util.Map<String, Object> adminSetUserMFAPreferenceResponse) {
        this.adminSetUserMFAPreferenceResponse = adminSetUserMFAPreferenceResponse;
        return this;
    }
    public String contentType;
    public AdminSetUserMfaPreferenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AdminSetUserMfaPreferenceResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AdminSetUserMfaPreferenceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public AdminSetUserMfaPreferenceResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object passwordResetRequiredException;
    public AdminSetUserMfaPreferenceResponse withPasswordResetRequiredException(Object passwordResetRequiredException) {
        this.passwordResetRequiredException = passwordResetRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public AdminSetUserMfaPreferenceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AdminSetUserMfaPreferenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object userNotConfirmedException;
    public AdminSetUserMfaPreferenceResponse withUserNotConfirmedException(Object userNotConfirmedException) {
        this.userNotConfirmedException = userNotConfirmedException;
        return this;
    }
    public Object userNotFoundException;
    public AdminSetUserMfaPreferenceResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}