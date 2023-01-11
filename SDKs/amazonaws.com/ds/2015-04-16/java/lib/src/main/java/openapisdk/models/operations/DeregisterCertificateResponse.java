package openapisdk.models.operations;



public class DeregisterCertificateResponse {
    public Object certificateDoesNotExistException;
    public DeregisterCertificateResponse withCertificateDoesNotExistException(Object certificateDoesNotExistException) {
        this.certificateDoesNotExistException = certificateDoesNotExistException;
        return this;
    }
    public Object certificateInUseException;
    public DeregisterCertificateResponse withCertificateInUseException(Object certificateInUseException) {
        this.certificateInUseException = certificateInUseException;
        return this;
    }
    public Object clientException;
    public DeregisterCertificateResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeregisterCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deregisterCertificateResult;
    public DeregisterCertificateResponse withDeregisterCertificateResult(java.util.Map<String, Object> deregisterCertificateResult) {
        this.deregisterCertificateResult = deregisterCertificateResult;
        return this;
    }
    public Object directoryDoesNotExistException;
    public DeregisterCertificateResponse withDirectoryDoesNotExistException(Object directoryDoesNotExistException) {
        this.directoryDoesNotExistException = directoryDoesNotExistException;
        return this;
    }
    public Object directoryUnavailableException;
    public DeregisterCertificateResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object invalidParameterException;
    public DeregisterCertificateResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DeregisterCertificateResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeregisterCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DeregisterCertificateResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}