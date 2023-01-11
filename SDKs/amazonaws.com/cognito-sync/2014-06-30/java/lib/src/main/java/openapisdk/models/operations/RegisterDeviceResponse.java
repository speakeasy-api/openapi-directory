package openapisdk.models.operations;



public class RegisterDeviceResponse {
    public String contentType;
    public RegisterDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public RegisterDeviceResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidConfigurationException;
    public RegisterDeviceResponse withInvalidConfigurationException(Object invalidConfigurationException) {
        this.invalidConfigurationException = invalidConfigurationException;
        return this;
    }
    public Object invalidParameterException;
    public RegisterDeviceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public RegisterDeviceResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public openapisdk.models.shared.RegisterDeviceResponse registerDeviceResponse;
    public RegisterDeviceResponse withRegisterDeviceResponse(openapisdk.models.shared.RegisterDeviceResponse registerDeviceResponse) {
        this.registerDeviceResponse = registerDeviceResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public RegisterDeviceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RegisterDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public RegisterDeviceResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}