package openapisdk.models.operations;



public class PutFunctionEventInvokeConfigResponse {
    public String contentType;
    public PutFunctionEventInvokeConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FunctionEventInvokeConfig functionEventInvokeConfig;
    public PutFunctionEventInvokeConfigResponse withFunctionEventInvokeConfig(openapisdk.models.shared.FunctionEventInvokeConfig functionEventInvokeConfig) {
        this.functionEventInvokeConfig = functionEventInvokeConfig;
        return this;
    }
    public Object invalidParameterValueException;
    public PutFunctionEventInvokeConfigResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceConflictException;
    public PutFunctionEventInvokeConfigResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public PutFunctionEventInvokeConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public PutFunctionEventInvokeConfigResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public PutFunctionEventInvokeConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutFunctionEventInvokeConfigResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}