package openapisdk.models.operations;



public class UpdateDeviceStatusResponse {
    public String contentType;
    public UpdateDeviceStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public UpdateDeviceStatusResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateDeviceStatusResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidUserPoolConfigurationException;
    public UpdateDeviceStatusResponse withInvalidUserPoolConfigurationException(Object invalidUserPoolConfigurationException) {
        this.invalidUserPoolConfigurationException = invalidUserPoolConfigurationException;
        return this;
    }
    public Object notAuthorizedException;
    public UpdateDeviceStatusResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object passwordResetRequiredException;
    public UpdateDeviceStatusResponse withPasswordResetRequiredException(Object passwordResetRequiredException) {
        this.passwordResetRequiredException = passwordResetRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateDeviceStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateDeviceStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateDeviceStatusResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public java.util.Map<String, Object> updateDeviceStatusResponse;
    public UpdateDeviceStatusResponse withUpdateDeviceStatusResponse(java.util.Map<String, Object> updateDeviceStatusResponse) {
        this.updateDeviceStatusResponse = updateDeviceStatusResponse;
        return this;
    }
    public Object userNotConfirmedException;
    public UpdateDeviceStatusResponse withUserNotConfirmedException(Object userNotConfirmedException) {
        this.userNotConfirmedException = userNotConfirmedException;
        return this;
    }
    public Object userNotFoundException;
    public UpdateDeviceStatusResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}