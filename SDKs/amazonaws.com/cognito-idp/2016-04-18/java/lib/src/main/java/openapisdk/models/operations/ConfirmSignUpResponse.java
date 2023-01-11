package openapisdk.models.operations;



public class ConfirmSignUpResponse {
    public Object aliasExistsException;
    public ConfirmSignUpResponse withAliasExistsException(Object aliasExistsException) {
        this.aliasExistsException = aliasExistsException;
        return this;
    }
    public Object codeMismatchException;
    public ConfirmSignUpResponse withCodeMismatchException(Object codeMismatchException) {
        this.codeMismatchException = codeMismatchException;
        return this;
    }
    public java.util.Map<String, Object> confirmSignUpResponse;
    public ConfirmSignUpResponse withConfirmSignUpResponse(java.util.Map<String, Object> confirmSignUpResponse) {
        this.confirmSignUpResponse = confirmSignUpResponse;
        return this;
    }
    public String contentType;
    public ConfirmSignUpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object expiredCodeException;
    public ConfirmSignUpResponse withExpiredCodeException(Object expiredCodeException) {
        this.expiredCodeException = expiredCodeException;
        return this;
    }
    public Object internalErrorException;
    public ConfirmSignUpResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidLambdaResponseException;
    public ConfirmSignUpResponse withInvalidLambdaResponseException(Object invalidLambdaResponseException) {
        this.invalidLambdaResponseException = invalidLambdaResponseException;
        return this;
    }
    public Object invalidParameterException;
    public ConfirmSignUpResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public ConfirmSignUpResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAuthorizedException;
    public ConfirmSignUpResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ConfirmSignUpResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ConfirmSignUpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyFailedAttemptsException;
    public ConfirmSignUpResponse withTooManyFailedAttemptsException(Object tooManyFailedAttemptsException) {
        this.tooManyFailedAttemptsException = tooManyFailedAttemptsException;
        return this;
    }
    public Object tooManyRequestsException;
    public ConfirmSignUpResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unexpectedLambdaException;
    public ConfirmSignUpResponse withUnexpectedLambdaException(Object unexpectedLambdaException) {
        this.unexpectedLambdaException = unexpectedLambdaException;
        return this;
    }
    public Object userLambdaValidationException;
    public ConfirmSignUpResponse withUserLambdaValidationException(Object userLambdaValidationException) {
        this.userLambdaValidationException = userLambdaValidationException;
        return this;
    }
    public Object userNotFoundException;
    public ConfirmSignUpResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}