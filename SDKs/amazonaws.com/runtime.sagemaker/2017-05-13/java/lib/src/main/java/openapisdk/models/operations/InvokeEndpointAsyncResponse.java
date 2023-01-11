package openapisdk.models.operations;



public class InvokeEndpointAsyncResponse {
    public String contentType;
    public InvokeEndpointAsyncResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailure;
    public InvokeEndpointAsyncResponse withInternalFailure(Object internalFailure) {
        this.internalFailure = internalFailure;
        return this;
    }
    public openapisdk.models.shared.InvokeEndpointAsyncOutput invokeEndpointAsyncOutput;
    public InvokeEndpointAsyncResponse withInvokeEndpointAsyncOutput(openapisdk.models.shared.InvokeEndpointAsyncOutput invokeEndpointAsyncOutput) {
        this.invokeEndpointAsyncOutput = invokeEndpointAsyncOutput;
        return this;
    }
    public Object serviceUnavailable;
    public InvokeEndpointAsyncResponse withServiceUnavailable(Object serviceUnavailable) {
        this.serviceUnavailable = serviceUnavailable;
        return this;
    }
    public Long statusCode;
    public InvokeEndpointAsyncResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationError;
    public InvokeEndpointAsyncResponse withValidationError(Object validationError) {
        this.validationError = validationError;
        return this;
    }
}