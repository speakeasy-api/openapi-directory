package openapisdk.models.operations;



public class DeleteCaCertificateResponse {
    public Object certificateStateException;
    public DeleteCaCertificateResponse withCertificateStateException(Object certificateStateException) {
        this.certificateStateException = certificateStateException;
        return this;
    }
    public String contentType;
    public DeleteCaCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteCACertificateResponse;
    public DeleteCaCertificateResponse withDeleteCaCertificateResponse(java.util.Map<String, Object> deleteCACertificateResponse) {
        this.deleteCACertificateResponse = deleteCACertificateResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteCaCertificateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteCaCertificateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteCaCertificateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteCaCertificateResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteCaCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteCaCertificateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DeleteCaCertificateResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}