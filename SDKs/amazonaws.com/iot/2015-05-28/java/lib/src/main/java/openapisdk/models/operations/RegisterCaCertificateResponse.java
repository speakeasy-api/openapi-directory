package openapisdk.models.operations;



public class RegisterCaCertificateResponse {
    public Object certificateValidationException;
    public RegisterCaCertificateResponse withCertificateValidationException(Object certificateValidationException) {
        this.certificateValidationException = certificateValidationException;
        return this;
    }
    public String contentType;
    public RegisterCaCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public RegisterCaCertificateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public RegisterCaCertificateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public RegisterCaCertificateResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.RegisterCaCertificateResponse registerCACertificateResponse;
    public RegisterCaCertificateResponse withRegisterCaCertificateResponse(openapisdk.models.shared.RegisterCaCertificateResponse registerCACertificateResponse) {
        this.registerCACertificateResponse = registerCACertificateResponse;
        return this;
    }
    public Object registrationCodeValidationException;
    public RegisterCaCertificateResponse withRegistrationCodeValidationException(Object registrationCodeValidationException) {
        this.registrationCodeValidationException = registrationCodeValidationException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public RegisterCaCertificateResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object serviceUnavailableException;
    public RegisterCaCertificateResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public RegisterCaCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public RegisterCaCertificateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public RegisterCaCertificateResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}