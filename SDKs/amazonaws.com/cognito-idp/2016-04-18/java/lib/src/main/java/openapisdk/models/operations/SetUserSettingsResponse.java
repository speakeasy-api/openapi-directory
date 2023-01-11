package openapisdk.models.operations;



public class SetUserSettingsResponse {
    public String contentType;
    public SetUserSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public SetUserSettingsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public SetUserSettingsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public SetUserSettingsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object passwordResetRequiredException;
    public SetUserSettingsResponse withPasswordResetRequiredException(Object passwordResetRequiredException) {
        this.passwordResetRequiredException = passwordResetRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public SetUserSettingsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> setUserSettingsResponse;
    public SetUserSettingsResponse withSetUserSettingsResponse(java.util.Map<String, Object> setUserSettingsResponse) {
        this.setUserSettingsResponse = setUserSettingsResponse;
        return this;
    }
    public Long statusCode;
    public SetUserSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object userNotConfirmedException;
    public SetUserSettingsResponse withUserNotConfirmedException(Object userNotConfirmedException) {
        this.userNotConfirmedException = userNotConfirmedException;
        return this;
    }
    public Object userNotFoundException;
    public SetUserSettingsResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}