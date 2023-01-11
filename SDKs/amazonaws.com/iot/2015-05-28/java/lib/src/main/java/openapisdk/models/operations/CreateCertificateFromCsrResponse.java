package openapisdk.models.operations;



public class CreateCertificateFromCsrResponse {
    public String contentType;
    public CreateCertificateFromCsrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCertificateFromCsrResponse createCertificateFromCsrResponse;
    public CreateCertificateFromCsrResponse withCreateCertificateFromCsrResponse(openapisdk.models.shared.CreateCertificateFromCsrResponse createCertificateFromCsrResponse) {
        this.createCertificateFromCsrResponse = createCertificateFromCsrResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateCertificateFromCsrResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateCertificateFromCsrResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateCertificateFromCsrResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateCertificateFromCsrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateCertificateFromCsrResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public CreateCertificateFromCsrResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}