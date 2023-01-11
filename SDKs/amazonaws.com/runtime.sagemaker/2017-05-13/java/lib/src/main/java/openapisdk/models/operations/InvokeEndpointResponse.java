package openapisdk.models.operations;



public class InvokeEndpointResponse {
    public String contentType;
    public InvokeEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailure;
    public InvokeEndpointResponse withInternalFailure(Object internalFailure) {
        this.internalFailure = internalFailure;
        return this;
    }
    public openapisdk.models.shared.InvokeEndpointOutput invokeEndpointOutput;
    public InvokeEndpointResponse withInvokeEndpointOutput(openapisdk.models.shared.InvokeEndpointOutput invokeEndpointOutput) {
        this.invokeEndpointOutput = invokeEndpointOutput;
        return this;
    }
    public Object modelError;
    public InvokeEndpointResponse withModelError(Object modelError) {
        this.modelError = modelError;
        return this;
    }
    public Object serviceUnavailable;
    public InvokeEndpointResponse withServiceUnavailable(Object serviceUnavailable) {
        this.serviceUnavailable = serviceUnavailable;
        return this;
    }
    public Long statusCode;
    public InvokeEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationError;
    public InvokeEndpointResponse withValidationError(Object validationError) {
        this.validationError = validationError;
        return this;
    }
}