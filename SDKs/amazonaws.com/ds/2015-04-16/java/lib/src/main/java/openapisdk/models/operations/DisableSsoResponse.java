package openapisdk.models.operations;



public class DisableSsoResponse {
    public Object authenticationFailedException;
    public DisableSsoResponse withAuthenticationFailedException(Object authenticationFailedException) {
        this.authenticationFailedException = authenticationFailedException;
        return this;
    }
    public Object clientException;
    public DisableSsoResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DisableSsoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disableSsoResult;
    public DisableSsoResponse withDisableSsoResult(java.util.Map<String, Object> disableSsoResult) {
        this.disableSsoResult = disableSsoResult;
        return this;
    }
    public Object entityDoesNotExistException;
    public DisableSsoResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object insufficientPermissionsException;
    public DisableSsoResponse withInsufficientPermissionsException(Object insufficientPermissionsException) {
        this.insufficientPermissionsException = insufficientPermissionsException;
        return this;
    }
    public Object serviceException;
    public DisableSsoResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DisableSsoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}