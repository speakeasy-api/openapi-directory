package openapisdk.models.operations;



public class ChangePasswordResponse {
    public java.util.Map<String, Object> changePasswordResponse;
    public ChangePasswordResponse withChangePasswordResponse(java.util.Map<String, Object> changePasswordResponse) {
        this.changePasswordResponse = changePasswordResponse;
        return this;
    }
    public String contentType;
    public ChangePasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ChangePasswordResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ChangePasswordResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidPasswordException;
    public ChangePasswordResponse withInvalidPasswordException(Object invalidPasswordException) {
        this.invalidPasswordException = invalidPasswordException;
        return this;
    }
    public Object limitExceededException;
    public ChangePasswordResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAuthorizedException;
    public ChangePasswordResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object passwordResetRequiredException;
    public ChangePasswordResponse withPasswordResetRequiredException(Object passwordResetRequiredException) {
        this.passwordResetRequiredException = passwordResetRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public ChangePasswordResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ChangePasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ChangePasswordResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userNotConfirmedException;
    public ChangePasswordResponse withUserNotConfirmedException(Object userNotConfirmedException) {
        this.userNotConfirmedException = userNotConfirmedException;
        return this;
    }
    public Object userNotFoundException;
    public ChangePasswordResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}