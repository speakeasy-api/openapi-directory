package openapisdk.models.operations;



public class UpdateFunctionEventInvokeConfigResponse {
    public String contentType;
    public UpdateFunctionEventInvokeConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FunctionEventInvokeConfig functionEventInvokeConfig;
    public UpdateFunctionEventInvokeConfigResponse withFunctionEventInvokeConfig(openapisdk.models.shared.FunctionEventInvokeConfig functionEventInvokeConfig) {
        this.functionEventInvokeConfig = functionEventInvokeConfig;
        return this;
    }
    public Object invalidParameterValueException;
    public UpdateFunctionEventInvokeConfigResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceConflictException;
    public UpdateFunctionEventInvokeConfigResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFunctionEventInvokeConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public UpdateFunctionEventInvokeConfigResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateFunctionEventInvokeConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateFunctionEventInvokeConfigResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}