package openapisdk.models.operations;



public class DeleteCertificateResponse {
    public Object certificateStateException;
    public DeleteCertificateResponse withCertificateStateException(Object certificateStateException) {
        this.certificateStateException = certificateStateException;
        return this;
    }
    public String contentType;
    public DeleteCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deleteConflictException;
    public DeleteCertificateResponse withDeleteConflictException(Object deleteConflictException) {
        this.deleteConflictException = deleteConflictException;
        return this;
    }
    public Object internalFailureException;
    public DeleteCertificateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteCertificateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteCertificateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteCertificateResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteCertificateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DeleteCertificateResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}