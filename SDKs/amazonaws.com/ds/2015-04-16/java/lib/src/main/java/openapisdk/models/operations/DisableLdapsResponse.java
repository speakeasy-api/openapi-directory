package openapisdk.models.operations;



public class DisableLdapsResponse {
    public Object clientException;
    public DisableLdapsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DisableLdapsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryDoesNotExistException;
    public DisableLdapsResponse withDirectoryDoesNotExistException(Object directoryDoesNotExistException) {
        this.directoryDoesNotExistException = directoryDoesNotExistException;
        return this;
    }
    public Object directoryUnavailableException;
    public DisableLdapsResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public java.util.Map<String, Object> disableLDAPSResult;
    public DisableLdapsResponse withDisableLdapsResult(java.util.Map<String, Object> disableLDAPSResult) {
        this.disableLDAPSResult = disableLDAPSResult;
        return this;
    }
    public Object invalidLDAPSStatusException;
    public DisableLdapsResponse withInvalidLdapsStatusException(Object invalidLDAPSStatusException) {
        this.invalidLDAPSStatusException = invalidLDAPSStatusException;
        return this;
    }
    public Object invalidParameterException;
    public DisableLdapsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DisableLdapsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DisableLdapsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DisableLdapsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}