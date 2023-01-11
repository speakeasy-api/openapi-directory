package openapisdk.models.operations;



public class AdminDeleteUserAttributesResponse {
    public java.util.Map<String, Object> adminDeleteUserAttributesResponse;
    public AdminDeleteUserAttributesResponse withAdminDeleteUserAttributesResponse(java.util.Map<String, Object> adminDeleteUserAttributesResponse) {
        this.adminDeleteUserAttributesResponse = adminDeleteUserAttributesResponse;
        return this;
    }
    public String contentType;
    public AdminDeleteUserAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AdminDeleteUserAttributesResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AdminDeleteUserAttributesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public AdminDeleteUserAttributesResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AdminDeleteUserAttributesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AdminDeleteUserAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AdminDeleteUserAttributesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userNotFoundException;
    public AdminDeleteUserAttributesResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}