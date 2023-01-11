package openapisdk.models.operations;



public class EnableClientAuthenticationResponse {
    public Object accessDeniedException;
    public EnableClientAuthenticationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public EnableClientAuthenticationResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public EnableClientAuthenticationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryDoesNotExistException;
    public EnableClientAuthenticationResponse withDirectoryDoesNotExistException(Object directoryDoesNotExistException) {
        this.directoryDoesNotExistException = directoryDoesNotExistException;
        return this;
    }
    public java.util.Map<String, Object> enableClientAuthenticationResult;
    public EnableClientAuthenticationResponse withEnableClientAuthenticationResult(java.util.Map<String, Object> enableClientAuthenticationResult) {
        this.enableClientAuthenticationResult = enableClientAuthenticationResult;
        return this;
    }
    public Object invalidClientAuthStatusException;
    public EnableClientAuthenticationResponse withInvalidClientAuthStatusException(Object invalidClientAuthStatusException) {
        this.invalidClientAuthStatusException = invalidClientAuthStatusException;
        return this;
    }
    public Object noAvailableCertificateException;
    public EnableClientAuthenticationResponse withNoAvailableCertificateException(Object noAvailableCertificateException) {
        this.noAvailableCertificateException = noAvailableCertificateException;
        return this;
    }
    public Object serviceException;
    public EnableClientAuthenticationResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public EnableClientAuthenticationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public EnableClientAuthenticationResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}