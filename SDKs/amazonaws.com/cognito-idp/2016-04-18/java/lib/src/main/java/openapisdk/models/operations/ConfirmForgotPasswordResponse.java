package openapisdk.models.operations;



public class ConfirmForgotPasswordResponse {
    public Object codeMismatchException;
    public ConfirmForgotPasswordResponse withCodeMismatchException(Object codeMismatchException) {
        this.codeMismatchException = codeMismatchException;
        return this;
    }
    public java.util.Map<String, Object> confirmForgotPasswordResponse;
    public ConfirmForgotPasswordResponse withConfirmForgotPasswordResponse(java.util.Map<String, Object> confirmForgotPasswordResponse) {
        this.confirmForgotPasswordResponse = confirmForgotPasswordResponse;
        return this;
    }
    public String contentType;
    public ConfirmForgotPasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object expiredCodeException;
    public ConfirmForgotPasswordResponse withExpiredCodeException(Object expiredCodeException) {
        this.expiredCodeException = expiredCodeException;
        return this;
    }
    public Object internalErrorException;
    public ConfirmForgotPasswordResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidLambdaResponseException;
    public ConfirmForgotPasswordResponse withInvalidLambdaResponseException(Object invalidLambdaResponseException) {
        this.invalidLambdaResponseException = invalidLambdaResponseException;
        return this;
    }
    public Object invalidParameterException;
    public ConfirmForgotPasswordResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidPasswordException;
    public ConfirmForgotPasswordResponse withInvalidPasswordException(Object invalidPasswordException) {
        this.invalidPasswordException = invalidPasswordException;
        return this;
    }
    public Object limitExceededException;
    public ConfirmForgotPasswordResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAuthorizedException;
    public ConfirmForgotPasswordResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ConfirmForgotPasswordResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ConfirmForgotPasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyFailedAttemptsException;
    public ConfirmForgotPasswordResponse withTooManyFailedAttemptsException(Object tooManyFailedAttemptsException) {
        this.tooManyFailedAttemptsException = tooManyFailedAttemptsException;
        return this;
    }
    public Object tooManyRequestsException;
    public ConfirmForgotPasswordResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unexpectedLambdaException;
    public ConfirmForgotPasswordResponse withUnexpectedLambdaException(Object unexpectedLambdaException) {
        this.unexpectedLambdaException = unexpectedLambdaException;
        return this;
    }
    public Object userLambdaValidationException;
    public ConfirmForgotPasswordResponse withUserLambdaValidationException(Object userLambdaValidationException) {
        this.userLambdaValidationException = userLambdaValidationException;
        return this;
    }
    public Object userNotConfirmedException;
    public ConfirmForgotPasswordResponse withUserNotConfirmedException(Object userNotConfirmedException) {
        this.userNotConfirmedException = userNotConfirmedException;
        return this;
    }
    public Object userNotFoundException;
    public ConfirmForgotPasswordResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}