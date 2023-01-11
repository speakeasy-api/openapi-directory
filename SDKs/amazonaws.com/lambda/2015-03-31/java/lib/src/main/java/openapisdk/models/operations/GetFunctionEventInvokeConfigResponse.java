package openapisdk.models.operations;



public class GetFunctionEventInvokeConfigResponse {
    public String contentType;
    public GetFunctionEventInvokeConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FunctionEventInvokeConfig functionEventInvokeConfig;
    public GetFunctionEventInvokeConfigResponse withFunctionEventInvokeConfig(openapisdk.models.shared.FunctionEventInvokeConfig functionEventInvokeConfig) {
        this.functionEventInvokeConfig = functionEventInvokeConfig;
        return this;
    }
    public Object invalidParameterValueException;
    public GetFunctionEventInvokeConfigResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFunctionEventInvokeConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetFunctionEventInvokeConfigResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetFunctionEventInvokeConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetFunctionEventInvokeConfigResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}