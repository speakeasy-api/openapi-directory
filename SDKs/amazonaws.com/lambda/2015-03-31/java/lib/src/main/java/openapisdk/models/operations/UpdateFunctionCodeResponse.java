package openapisdk.models.operations;



public class UpdateFunctionCodeResponse {
    public Object codeSigningConfigNotFoundException;
    public UpdateFunctionCodeResponse withCodeSigningConfigNotFoundException(Object codeSigningConfigNotFoundException) {
        this.codeSigningConfigNotFoundException = codeSigningConfigNotFoundException;
        return this;
    }
    public Object codeStorageExceededException;
    public UpdateFunctionCodeResponse withCodeStorageExceededException(Object codeStorageExceededException) {
        this.codeStorageExceededException = codeStorageExceededException;
        return this;
    }
    public Object codeVerificationFailedException;
    public UpdateFunctionCodeResponse withCodeVerificationFailedException(Object codeVerificationFailedException) {
        this.codeVerificationFailedException = codeVerificationFailedException;
        return this;
    }
    public String contentType;
    public UpdateFunctionCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FunctionConfiguration functionConfiguration;
    public UpdateFunctionCodeResponse withFunctionConfiguration(openapisdk.models.shared.FunctionConfiguration functionConfiguration) {
        this.functionConfiguration = functionConfiguration;
        return this;
    }
    public Object invalidCodeSignatureException;
    public UpdateFunctionCodeResponse withInvalidCodeSignatureException(Object invalidCodeSignatureException) {
        this.invalidCodeSignatureException = invalidCodeSignatureException;
        return this;
    }
    public Object invalidParameterValueException;
    public UpdateFunctionCodeResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object preconditionFailedException;
    public UpdateFunctionCodeResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object resourceConflictException;
    public UpdateFunctionCodeResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFunctionCodeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public UpdateFunctionCodeResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateFunctionCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateFunctionCodeResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}