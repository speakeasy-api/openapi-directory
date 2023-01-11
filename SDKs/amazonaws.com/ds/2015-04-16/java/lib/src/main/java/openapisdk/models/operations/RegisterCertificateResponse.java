package openapisdk.models.operations;



public class RegisterCertificateResponse {
    public Object certificateAlreadyExistsException;
    public RegisterCertificateResponse withCertificateAlreadyExistsException(Object certificateAlreadyExistsException) {
        this.certificateAlreadyExistsException = certificateAlreadyExistsException;
        return this;
    }
    public Object certificateLimitExceededException;
    public RegisterCertificateResponse withCertificateLimitExceededException(Object certificateLimitExceededException) {
        this.certificateLimitExceededException = certificateLimitExceededException;
        return this;
    }
    public Object clientException;
    public RegisterCertificateResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public RegisterCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryDoesNotExistException;
    public RegisterCertificateResponse withDirectoryDoesNotExistException(Object directoryDoesNotExistException) {
        this.directoryDoesNotExistException = directoryDoesNotExistException;
        return this;
    }
    public Object directoryUnavailableException;
    public RegisterCertificateResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object invalidCertificateException;
    public RegisterCertificateResponse withInvalidCertificateException(Object invalidCertificateException) {
        this.invalidCertificateException = invalidCertificateException;
        return this;
    }
    public Object invalidParameterException;
    public RegisterCertificateResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.RegisterCertificateResult registerCertificateResult;
    public RegisterCertificateResponse withRegisterCertificateResult(openapisdk.models.shared.RegisterCertificateResult registerCertificateResult) {
        this.registerCertificateResult = registerCertificateResult;
        return this;
    }
    public Object serviceException;
    public RegisterCertificateResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public RegisterCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public RegisterCertificateResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}