package openapisdk.models.operations;



public class VerifyUserAttributeResponse {
    public Object codeMismatchException;
    public VerifyUserAttributeResponse withCodeMismatchException(Object codeMismatchException) {
        this.codeMismatchException = codeMismatchException;
        return this;
    }
    public String contentType;
    public VerifyUserAttributeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object expiredCodeException;
    public VerifyUserAttributeResponse withExpiredCodeException(Object expiredCodeException) {
        this.expiredCodeException = expiredCodeException;
        return this;
    }
    public Object internalErrorException;
    public VerifyUserAttributeResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public VerifyUserAttributeResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public VerifyUserAttributeResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAuthorizedException;
    public VerifyUserAttributeResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object passwordResetRequiredException;
    public VerifyUserAttributeResponse withPasswordResetRequiredException(Object passwordResetRequiredException) {
        this.passwordResetRequiredException = passwordResetRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public VerifyUserAttributeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public VerifyUserAttributeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public VerifyUserAttributeResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userNotConfirmedException;
    public VerifyUserAttributeResponse withUserNotConfirmedException(Object userNotConfirmedException) {
        this.userNotConfirmedException = userNotConfirmedException;
        return this;
    }
    public Object userNotFoundException;
    public VerifyUserAttributeResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> verifyUserAttributeResponse;
    public VerifyUserAttributeResponse withVerifyUserAttributeResponse(java.util.Map<String, Object> verifyUserAttributeResponse) {
        this.verifyUserAttributeResponse = verifyUserAttributeResponse;
        return this;
    }
}