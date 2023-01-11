package openapisdk.models.operations;



public class InvokeAsyncResponse {
    public String contentType;
    public InvokeAsyncResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestContentException;
    public InvokeAsyncResponse withInvalidRequestContentException(Object invalidRequestContentException) {
        this.invalidRequestContentException = invalidRequestContentException;
        return this;
    }
    public Object invalidRuntimeException;
    public InvokeAsyncResponse withInvalidRuntimeException(Object invalidRuntimeException) {
        this.invalidRuntimeException = invalidRuntimeException;
        return this;
    }
    public openapisdk.models.shared.InvokeAsyncResponse invokeAsyncResponse;
    public InvokeAsyncResponse withInvokeAsyncResponse(openapisdk.models.shared.InvokeAsyncResponse invokeAsyncResponse) {
        this.invokeAsyncResponse = invokeAsyncResponse;
        return this;
    }
    public Object resourceConflictException;
    public InvokeAsyncResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public InvokeAsyncResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public InvokeAsyncResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public InvokeAsyncResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}