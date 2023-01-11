package openapisdk.models.operations;



public class AdminUserGlobalSignOutResponse {
    public java.util.Map<String, Object> adminUserGlobalSignOutResponse;
    public AdminUserGlobalSignOutResponse withAdminUserGlobalSignOutResponse(java.util.Map<String, Object> adminUserGlobalSignOutResponse) {
        this.adminUserGlobalSignOutResponse = adminUserGlobalSignOutResponse;
        return this;
    }
    public String contentType;
    public AdminUserGlobalSignOutResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AdminUserGlobalSignOutResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AdminUserGlobalSignOutResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public AdminUserGlobalSignOutResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AdminUserGlobalSignOutResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AdminUserGlobalSignOutResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AdminUserGlobalSignOutResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userNotFoundException;
    public AdminUserGlobalSignOutResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}