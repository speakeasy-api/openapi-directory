package openapisdk.models.operations;



public class EnableSsoResponse {
    public Object authenticationFailedException;
    public EnableSsoResponse withAuthenticationFailedException(Object authenticationFailedException) {
        this.authenticationFailedException = authenticationFailedException;
        return this;
    }
    public Object clientException;
    public EnableSsoResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public EnableSsoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> enableSsoResult;
    public EnableSsoResponse withEnableSsoResult(java.util.Map<String, Object> enableSsoResult) {
        this.enableSsoResult = enableSsoResult;
        return this;
    }
    public Object entityDoesNotExistException;
    public EnableSsoResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object insufficientPermissionsException;
    public EnableSsoResponse withInsufficientPermissionsException(Object insufficientPermissionsException) {
        this.insufficientPermissionsException = insufficientPermissionsException;
        return this;
    }
    public Object serviceException;
    public EnableSsoResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public EnableSsoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}