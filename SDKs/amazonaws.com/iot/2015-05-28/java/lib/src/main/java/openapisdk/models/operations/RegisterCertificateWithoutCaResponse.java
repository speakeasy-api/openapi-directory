package openapisdk.models.operations;



public class RegisterCertificateWithoutCaResponse {
    public Object certificateStateException;
    public RegisterCertificateWithoutCaResponse withCertificateStateException(Object certificateStateException) {
        this.certificateStateException = certificateStateException;
        return this;
    }
    public Object certificateValidationException;
    public RegisterCertificateWithoutCaResponse withCertificateValidationException(Object certificateValidationException) {
        this.certificateValidationException = certificateValidationException;
        return this;
    }
    public String contentType;
    public RegisterCertificateWithoutCaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public RegisterCertificateWithoutCaResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public RegisterCertificateWithoutCaResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.RegisterCertificateWithoutCaResponse registerCertificateWithoutCAResponse;
    public RegisterCertificateWithoutCaResponse withRegisterCertificateWithoutCaResponse(openapisdk.models.shared.RegisterCertificateWithoutCaResponse registerCertificateWithoutCAResponse) {
        this.registerCertificateWithoutCAResponse = registerCertificateWithoutCAResponse;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public RegisterCertificateWithoutCaResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object serviceUnavailableException;
    public RegisterCertificateWithoutCaResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public RegisterCertificateWithoutCaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public RegisterCertificateWithoutCaResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public RegisterCertificateWithoutCaResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}