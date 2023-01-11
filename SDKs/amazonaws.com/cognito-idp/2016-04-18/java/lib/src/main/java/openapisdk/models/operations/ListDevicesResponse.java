package openapisdk.models.operations;



public class ListDevicesResponse {
    public String contentType;
    public ListDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListDevicesResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ListDevicesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidUserPoolConfigurationException;
    public ListDevicesResponse withInvalidUserPoolConfigurationException(Object invalidUserPoolConfigurationException) {
        this.invalidUserPoolConfigurationException = invalidUserPoolConfigurationException;
        return this;
    }
    public openapisdk.models.shared.ListDevicesResponse listDevicesResponse;
    public ListDevicesResponse withListDevicesResponse(openapisdk.models.shared.ListDevicesResponse listDevicesResponse) {
        this.listDevicesResponse = listDevicesResponse;
        return this;
    }
    public Object notAuthorizedException;
    public ListDevicesResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object passwordResetRequiredException;
    public ListDevicesResponse withPasswordResetRequiredException(Object passwordResetRequiredException) {
        this.passwordResetRequiredException = passwordResetRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListDevicesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListDevicesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userNotConfirmedException;
    public ListDevicesResponse withUserNotConfirmedException(Object userNotConfirmedException) {
        this.userNotConfirmedException = userNotConfirmedException;
        return this;
    }
    public Object userNotFoundException;
    public ListDevicesResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}