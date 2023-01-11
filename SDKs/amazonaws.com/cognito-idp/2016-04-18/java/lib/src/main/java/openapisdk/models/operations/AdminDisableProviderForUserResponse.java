package openapisdk.models.operations;



public class AdminDisableProviderForUserResponse {
    public java.util.Map<String, Object> adminDisableProviderForUserResponse;
    public AdminDisableProviderForUserResponse withAdminDisableProviderForUserResponse(java.util.Map<String, Object> adminDisableProviderForUserResponse) {
        this.adminDisableProviderForUserResponse = adminDisableProviderForUserResponse;
        return this;
    }
    public Object aliasExistsException;
    public AdminDisableProviderForUserResponse withAliasExistsException(Object aliasExistsException) {
        this.aliasExistsException = aliasExistsException;
        return this;
    }
    public String contentType;
    public AdminDisableProviderForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AdminDisableProviderForUserResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AdminDisableProviderForUserResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public AdminDisableProviderForUserResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AdminDisableProviderForUserResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AdminDisableProviderForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AdminDisableProviderForUserResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userNotFoundException;
    public AdminDisableProviderForUserResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}