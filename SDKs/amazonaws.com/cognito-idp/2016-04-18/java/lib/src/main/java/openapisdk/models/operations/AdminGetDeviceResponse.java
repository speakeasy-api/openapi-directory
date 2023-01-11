package openapisdk.models.operations;



public class AdminGetDeviceResponse {
    public openapisdk.models.shared.AdminGetDeviceResponse adminGetDeviceResponse;
    public AdminGetDeviceResponse withAdminGetDeviceResponse(openapisdk.models.shared.AdminGetDeviceResponse adminGetDeviceResponse) {
        this.adminGetDeviceResponse = adminGetDeviceResponse;
        return this;
    }
    public String contentType;
    public AdminGetDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AdminGetDeviceResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AdminGetDeviceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidUserPoolConfigurationException;
    public AdminGetDeviceResponse withInvalidUserPoolConfigurationException(Object invalidUserPoolConfigurationException) {
        this.invalidUserPoolConfigurationException = invalidUserPoolConfigurationException;
        return this;
    }
    public Object notAuthorizedException;
    public AdminGetDeviceResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AdminGetDeviceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AdminGetDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AdminGetDeviceResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}