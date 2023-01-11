package openapisdk.models.operations;



public class SetUserMfaPreferenceResponse {
    public String contentType;
    public SetUserMfaPreferenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public SetUserMfaPreferenceResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public SetUserMfaPreferenceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public SetUserMfaPreferenceResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object passwordResetRequiredException;
    public SetUserMfaPreferenceResponse withPasswordResetRequiredException(Object passwordResetRequiredException) {
        this.passwordResetRequiredException = passwordResetRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public SetUserMfaPreferenceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> setUserMFAPreferenceResponse;
    public SetUserMfaPreferenceResponse withSetUserMfaPreferenceResponse(java.util.Map<String, Object> setUserMFAPreferenceResponse) {
        this.setUserMFAPreferenceResponse = setUserMFAPreferenceResponse;
        return this;
    }
    public Long statusCode;
    public SetUserMfaPreferenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object userNotConfirmedException;
    public SetUserMfaPreferenceResponse withUserNotConfirmedException(Object userNotConfirmedException) {
        this.userNotConfirmedException = userNotConfirmedException;
        return this;
    }
    public Object userNotFoundException;
    public SetUserMfaPreferenceResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}