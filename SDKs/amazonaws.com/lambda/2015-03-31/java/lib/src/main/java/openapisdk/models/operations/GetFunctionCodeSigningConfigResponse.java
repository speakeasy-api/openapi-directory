package openapisdk.models.operations;



public class GetFunctionCodeSigningConfigResponse {
    public String contentType;
    public GetFunctionCodeSigningConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFunctionCodeSigningConfigResponse getFunctionCodeSigningConfigResponse;
    public GetFunctionCodeSigningConfigResponse withGetFunctionCodeSigningConfigResponse(openapisdk.models.shared.GetFunctionCodeSigningConfigResponse getFunctionCodeSigningConfigResponse) {
        this.getFunctionCodeSigningConfigResponse = getFunctionCodeSigningConfigResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetFunctionCodeSigningConfigResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFunctionCodeSigningConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetFunctionCodeSigningConfigResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetFunctionCodeSigningConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetFunctionCodeSigningConfigResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}