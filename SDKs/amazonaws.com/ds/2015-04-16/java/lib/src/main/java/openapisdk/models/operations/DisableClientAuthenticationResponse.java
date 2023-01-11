package openapisdk.models.operations;



public class DisableClientAuthenticationResponse {
    public Object accessDeniedException;
    public DisableClientAuthenticationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public DisableClientAuthenticationResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DisableClientAuthenticationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryDoesNotExistException;
    public DisableClientAuthenticationResponse withDirectoryDoesNotExistException(Object directoryDoesNotExistException) {
        this.directoryDoesNotExistException = directoryDoesNotExistException;
        return this;
    }
    public java.util.Map<String, Object> disableClientAuthenticationResult;
    public DisableClientAuthenticationResponse withDisableClientAuthenticationResult(java.util.Map<String, Object> disableClientAuthenticationResult) {
        this.disableClientAuthenticationResult = disableClientAuthenticationResult;
        return this;
    }
    public Object invalidClientAuthStatusException;
    public DisableClientAuthenticationResponse withInvalidClientAuthStatusException(Object invalidClientAuthStatusException) {
        this.invalidClientAuthStatusException = invalidClientAuthStatusException;
        return this;
    }
    public Object serviceException;
    public DisableClientAuthenticationResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DisableClientAuthenticationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DisableClientAuthenticationResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}