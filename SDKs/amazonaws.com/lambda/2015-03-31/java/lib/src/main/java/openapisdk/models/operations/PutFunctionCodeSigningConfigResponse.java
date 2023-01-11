package openapisdk.models.operations;



public class PutFunctionCodeSigningConfigResponse {
    public Object codeSigningConfigNotFoundException;
    public PutFunctionCodeSigningConfigResponse withCodeSigningConfigNotFoundException(Object codeSigningConfigNotFoundException) {
        this.codeSigningConfigNotFoundException = codeSigningConfigNotFoundException;
        return this;
    }
    public String contentType;
    public PutFunctionCodeSigningConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public PutFunctionCodeSigningConfigResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.PutFunctionCodeSigningConfigResponse putFunctionCodeSigningConfigResponse;
    public PutFunctionCodeSigningConfigResponse withPutFunctionCodeSigningConfigResponse(openapisdk.models.shared.PutFunctionCodeSigningConfigResponse putFunctionCodeSigningConfigResponse) {
        this.putFunctionCodeSigningConfigResponse = putFunctionCodeSigningConfigResponse;
        return this;
    }
    public Object resourceConflictException;
    public PutFunctionCodeSigningConfigResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public PutFunctionCodeSigningConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public PutFunctionCodeSigningConfigResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public PutFunctionCodeSigningConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutFunctionCodeSigningConfigResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}