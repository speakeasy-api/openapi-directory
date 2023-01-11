package openapisdk.models.operations;



public class GetDeviceResponse {
    public String contentType;
    public GetDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDeviceResponse getDeviceResponse;
    public GetDeviceResponse withGetDeviceResponse(openapisdk.models.shared.GetDeviceResponse getDeviceResponse) {
        this.getDeviceResponse = getDeviceResponse;
        return this;
    }
    public Object internalErrorException;
    public GetDeviceResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetDeviceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidUserPoolConfigurationException;
    public GetDeviceResponse withInvalidUserPoolConfigurationException(Object invalidUserPoolConfigurationException) {
        this.invalidUserPoolConfigurationException = invalidUserPoolConfigurationException;
        return this;
    }
    public Object notAuthorizedException;
    public GetDeviceResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object passwordResetRequiredException;
    public GetDeviceResponse withPasswordResetRequiredException(Object passwordResetRequiredException) {
        this.passwordResetRequiredException = passwordResetRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetDeviceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetDeviceResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userNotConfirmedException;
    public GetDeviceResponse withUserNotConfirmedException(Object userNotConfirmedException) {
        this.userNotConfirmedException = userNotConfirmedException;
        return this;
    }
    public Object userNotFoundException;
    public GetDeviceResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}