package openapisdk.models.operations;



public class EnableLdapsResponse {
    public Object clientException;
    public EnableLdapsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public EnableLdapsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryDoesNotExistException;
    public EnableLdapsResponse withDirectoryDoesNotExistException(Object directoryDoesNotExistException) {
        this.directoryDoesNotExistException = directoryDoesNotExistException;
        return this;
    }
    public Object directoryUnavailableException;
    public EnableLdapsResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public java.util.Map<String, Object> enableLDAPSResult;
    public EnableLdapsResponse withEnableLdapsResult(java.util.Map<String, Object> enableLDAPSResult) {
        this.enableLDAPSResult = enableLDAPSResult;
        return this;
    }
    public Object invalidLDAPSStatusException;
    public EnableLdapsResponse withInvalidLdapsStatusException(Object invalidLDAPSStatusException) {
        this.invalidLDAPSStatusException = invalidLDAPSStatusException;
        return this;
    }
    public Object invalidParameterException;
    public EnableLdapsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object noAvailableCertificateException;
    public EnableLdapsResponse withNoAvailableCertificateException(Object noAvailableCertificateException) {
        this.noAvailableCertificateException = noAvailableCertificateException;
        return this;
    }
    public Object serviceException;
    public EnableLdapsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public EnableLdapsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public EnableLdapsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}