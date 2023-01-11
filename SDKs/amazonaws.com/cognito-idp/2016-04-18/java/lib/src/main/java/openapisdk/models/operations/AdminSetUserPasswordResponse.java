package openapisdk.models.operations;



public class AdminSetUserPasswordResponse {
    public java.util.Map<String, Object> adminSetUserPasswordResponse;
    public AdminSetUserPasswordResponse withAdminSetUserPasswordResponse(java.util.Map<String, Object> adminSetUserPasswordResponse) {
        this.adminSetUserPasswordResponse = adminSetUserPasswordResponse;
        return this;
    }
    public String contentType;
    public AdminSetUserPasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AdminSetUserPasswordResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AdminSetUserPasswordResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidPasswordException;
    public AdminSetUserPasswordResponse withInvalidPasswordException(Object invalidPasswordException) {
        this.invalidPasswordException = invalidPasswordException;
        return this;
    }
    public Object notAuthorizedException;
    public AdminSetUserPasswordResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AdminSetUserPasswordResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AdminSetUserPasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AdminSetUserPasswordResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userNotFoundException;
    public AdminSetUserPasswordResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}