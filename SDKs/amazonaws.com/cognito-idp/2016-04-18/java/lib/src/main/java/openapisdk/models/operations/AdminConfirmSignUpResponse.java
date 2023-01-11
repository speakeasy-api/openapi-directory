package openapisdk.models.operations;



public class AdminConfirmSignUpResponse {
    public java.util.Map<String, Object> adminConfirmSignUpResponse;
    public AdminConfirmSignUpResponse withAdminConfirmSignUpResponse(java.util.Map<String, Object> adminConfirmSignUpResponse) {
        this.adminConfirmSignUpResponse = adminConfirmSignUpResponse;
        return this;
    }
    public String contentType;
    public AdminConfirmSignUpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AdminConfirmSignUpResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidLambdaResponseException;
    public AdminConfirmSignUpResponse withInvalidLambdaResponseException(Object invalidLambdaResponseException) {
        this.invalidLambdaResponseException = invalidLambdaResponseException;
        return this;
    }
    public Object invalidParameterException;
    public AdminConfirmSignUpResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public AdminConfirmSignUpResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAuthorizedException;
    public AdminConfirmSignUpResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AdminConfirmSignUpResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AdminConfirmSignUpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyFailedAttemptsException;
    public AdminConfirmSignUpResponse withTooManyFailedAttemptsException(Object tooManyFailedAttemptsException) {
        this.tooManyFailedAttemptsException = tooManyFailedAttemptsException;
        return this;
    }
    public Object tooManyRequestsException;
    public AdminConfirmSignUpResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unexpectedLambdaException;
    public AdminConfirmSignUpResponse withUnexpectedLambdaException(Object unexpectedLambdaException) {
        this.unexpectedLambdaException = unexpectedLambdaException;
        return this;
    }
    public Object userLambdaValidationException;
    public AdminConfirmSignUpResponse withUserLambdaValidationException(Object userLambdaValidationException) {
        this.userLambdaValidationException = userLambdaValidationException;
        return this;
    }
    public Object userNotFoundException;
    public AdminConfirmSignUpResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}