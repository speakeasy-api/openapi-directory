package openapisdk.models.operations;



public class CreateFunctionResponse {
    public Object codeSigningConfigNotFoundException;
    public CreateFunctionResponse withCodeSigningConfigNotFoundException(Object codeSigningConfigNotFoundException) {
        this.codeSigningConfigNotFoundException = codeSigningConfigNotFoundException;
        return this;
    }
    public Object codeStorageExceededException;
    public CreateFunctionResponse withCodeStorageExceededException(Object codeStorageExceededException) {
        this.codeStorageExceededException = codeStorageExceededException;
        return this;
    }
    public Object codeVerificationFailedException;
    public CreateFunctionResponse withCodeVerificationFailedException(Object codeVerificationFailedException) {
        this.codeVerificationFailedException = codeVerificationFailedException;
        return this;
    }
    public String contentType;
    public CreateFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FunctionConfiguration functionConfiguration;
    public CreateFunctionResponse withFunctionConfiguration(openapisdk.models.shared.FunctionConfiguration functionConfiguration) {
        this.functionConfiguration = functionConfiguration;
        return this;
    }
    public Object invalidCodeSignatureException;
    public CreateFunctionResponse withInvalidCodeSignatureException(Object invalidCodeSignatureException) {
        this.invalidCodeSignatureException = invalidCodeSignatureException;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateFunctionResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceConflictException;
    public CreateFunctionResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateFunctionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public CreateFunctionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateFunctionResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}