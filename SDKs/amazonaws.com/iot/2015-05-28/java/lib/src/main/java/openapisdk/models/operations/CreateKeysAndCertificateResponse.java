package openapisdk.models.operations;



public class CreateKeysAndCertificateResponse {
    public String contentType;
    public CreateKeysAndCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateKeysAndCertificateResponse createKeysAndCertificateResponse;
    public CreateKeysAndCertificateResponse withCreateKeysAndCertificateResponse(openapisdk.models.shared.CreateKeysAndCertificateResponse createKeysAndCertificateResponse) {
        this.createKeysAndCertificateResponse = createKeysAndCertificateResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateKeysAndCertificateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateKeysAndCertificateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateKeysAndCertificateResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateKeysAndCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateKeysAndCertificateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public CreateKeysAndCertificateResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}