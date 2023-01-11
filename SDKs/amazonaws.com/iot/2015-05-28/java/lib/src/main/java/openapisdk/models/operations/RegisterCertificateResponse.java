package openapisdk.models.operations;



public class RegisterCertificateResponse {
    public Object certificateConflictException;
    public RegisterCertificateResponse withCertificateConflictException(Object certificateConflictException) {
        this.certificateConflictException = certificateConflictException;
        return this;
    }
    public Object certificateStateException;
    public RegisterCertificateResponse withCertificateStateException(Object certificateStateException) {
        this.certificateStateException = certificateStateException;
        return this;
    }
    public Object certificateValidationException;
    public RegisterCertificateResponse withCertificateValidationException(Object certificateValidationException) {
        this.certificateValidationException = certificateValidationException;
        return this;
    }
    public String contentType;
    public RegisterCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public RegisterCertificateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public RegisterCertificateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.RegisterCertificateResponse registerCertificateResponse;
    public RegisterCertificateResponse withRegisterCertificateResponse(openapisdk.models.shared.RegisterCertificateResponse registerCertificateResponse) {
        this.registerCertificateResponse = registerCertificateResponse;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public RegisterCertificateResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object serviceUnavailableException;
    public RegisterCertificateResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public RegisterCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public RegisterCertificateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public RegisterCertificateResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}