package openapisdk.models.operations;



public class VerifySoftwareTokenResponse {
    public Object codeMismatchException;
    public VerifySoftwareTokenResponse withCodeMismatchException(Object codeMismatchException) {
        this.codeMismatchException = codeMismatchException;
        return this;
    }
    public String contentType;
    public VerifySoftwareTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object enableSoftwareTokenMFAException;
    public VerifySoftwareTokenResponse withEnableSoftwareTokenMfaException(Object enableSoftwareTokenMFAException) {
        this.enableSoftwareTokenMFAException = enableSoftwareTokenMFAException;
        return this;
    }
    public Object internalErrorException;
    public VerifySoftwareTokenResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public VerifySoftwareTokenResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidUserPoolConfigurationException;
    public VerifySoftwareTokenResponse withInvalidUserPoolConfigurationException(Object invalidUserPoolConfigurationException) {
        this.invalidUserPoolConfigurationException = invalidUserPoolConfigurationException;
        return this;
    }
    public Object notAuthorizedException;
    public VerifySoftwareTokenResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object passwordResetRequiredException;
    public VerifySoftwareTokenResponse withPasswordResetRequiredException(Object passwordResetRequiredException) {
        this.passwordResetRequiredException = passwordResetRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public VerifySoftwareTokenResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object softwareTokenMFANotFoundException;
    public VerifySoftwareTokenResponse withSoftwareTokenMfaNotFoundException(Object softwareTokenMFANotFoundException) {
        this.softwareTokenMFANotFoundException = softwareTokenMFANotFoundException;
        return this;
    }
    public Long statusCode;
    public VerifySoftwareTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public VerifySoftwareTokenResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userNotConfirmedException;
    public VerifySoftwareTokenResponse withUserNotConfirmedException(Object userNotConfirmedException) {
        this.userNotConfirmedException = userNotConfirmedException;
        return this;
    }
    public Object userNotFoundException;
    public VerifySoftwareTokenResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
    public openapisdk.models.shared.VerifySoftwareTokenResponse verifySoftwareTokenResponse;
    public VerifySoftwareTokenResponse withVerifySoftwareTokenResponse(openapisdk.models.shared.VerifySoftwareTokenResponse verifySoftwareTokenResponse) {
        this.verifySoftwareTokenResponse = verifySoftwareTokenResponse;
        return this;
    }
}