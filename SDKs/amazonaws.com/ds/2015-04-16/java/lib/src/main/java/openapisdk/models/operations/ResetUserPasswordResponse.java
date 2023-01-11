package openapisdk.models.operations;



public class ResetUserPasswordResponse {
    public Object clientException;
    public ResetUserPasswordResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ResetUserPasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryUnavailableException;
    public ResetUserPasswordResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object entityDoesNotExistException;
    public ResetUserPasswordResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidPasswordException;
    public ResetUserPasswordResponse withInvalidPasswordException(Object invalidPasswordException) {
        this.invalidPasswordException = invalidPasswordException;
        return this;
    }
    public java.util.Map<String, Object> resetUserPasswordResult;
    public ResetUserPasswordResponse withResetUserPasswordResult(java.util.Map<String, Object> resetUserPasswordResult) {
        this.resetUserPasswordResult = resetUserPasswordResult;
        return this;
    }
    public Object serviceException;
    public ResetUserPasswordResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ResetUserPasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public ResetUserPasswordResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
    public Object userDoesNotExistException;
    public ResetUserPasswordResponse withUserDoesNotExistException(Object userDoesNotExistException) {
        this.userDoesNotExistException = userDoesNotExistException;
        return this;
    }
}