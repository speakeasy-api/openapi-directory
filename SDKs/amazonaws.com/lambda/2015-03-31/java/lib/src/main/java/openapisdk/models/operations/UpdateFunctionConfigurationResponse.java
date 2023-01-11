package openapisdk.models.operations;



public class UpdateFunctionConfigurationResponse {
    public Object codeSigningConfigNotFoundException;
    public UpdateFunctionConfigurationResponse withCodeSigningConfigNotFoundException(Object codeSigningConfigNotFoundException) {
        this.codeSigningConfigNotFoundException = codeSigningConfigNotFoundException;
        return this;
    }
    public Object codeVerificationFailedException;
    public UpdateFunctionConfigurationResponse withCodeVerificationFailedException(Object codeVerificationFailedException) {
        this.codeVerificationFailedException = codeVerificationFailedException;
        return this;
    }
    public String contentType;
    public UpdateFunctionConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FunctionConfiguration functionConfiguration;
    public UpdateFunctionConfigurationResponse withFunctionConfiguration(openapisdk.models.shared.FunctionConfiguration functionConfiguration) {
        this.functionConfiguration = functionConfiguration;
        return this;
    }
    public Object invalidCodeSignatureException;
    public UpdateFunctionConfigurationResponse withInvalidCodeSignatureException(Object invalidCodeSignatureException) {
        this.invalidCodeSignatureException = invalidCodeSignatureException;
        return this;
    }
    public Object invalidParameterValueException;
    public UpdateFunctionConfigurationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object preconditionFailedException;
    public UpdateFunctionConfigurationResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object resourceConflictException;
    public UpdateFunctionConfigurationResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFunctionConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public UpdateFunctionConfigurationResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateFunctionConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateFunctionConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}