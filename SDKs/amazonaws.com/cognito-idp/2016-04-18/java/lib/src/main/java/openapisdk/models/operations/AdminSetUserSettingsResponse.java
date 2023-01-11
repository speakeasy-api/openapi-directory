package openapisdk.models.operations;



public class AdminSetUserSettingsResponse {
    public java.util.Map<String, Object> adminSetUserSettingsResponse;
    public AdminSetUserSettingsResponse withAdminSetUserSettingsResponse(java.util.Map<String, Object> adminSetUserSettingsResponse) {
        this.adminSetUserSettingsResponse = adminSetUserSettingsResponse;
        return this;
    }
    public String contentType;
    public AdminSetUserSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AdminSetUserSettingsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AdminSetUserSettingsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public AdminSetUserSettingsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AdminSetUserSettingsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AdminSetUserSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object userNotFoundException;
    public AdminSetUserSettingsResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}