package openapisdk.models.operations;



public class AdminUpdateDeviceStatusResponse {
    public java.util.Map<String, Object> adminUpdateDeviceStatusResponse;
    public AdminUpdateDeviceStatusResponse withAdminUpdateDeviceStatusResponse(java.util.Map<String, Object> adminUpdateDeviceStatusResponse) {
        this.adminUpdateDeviceStatusResponse = adminUpdateDeviceStatusResponse;
        return this;
    }
    public String contentType;
    public AdminUpdateDeviceStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AdminUpdateDeviceStatusResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AdminUpdateDeviceStatusResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidUserPoolConfigurationException;
    public AdminUpdateDeviceStatusResponse withInvalidUserPoolConfigurationException(Object invalidUserPoolConfigurationException) {
        this.invalidUserPoolConfigurationException = invalidUserPoolConfigurationException;
        return this;
    }
    public Object notAuthorizedException;
    public AdminUpdateDeviceStatusResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AdminUpdateDeviceStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AdminUpdateDeviceStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AdminUpdateDeviceStatusResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userNotFoundException;
    public AdminUpdateDeviceStatusResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}