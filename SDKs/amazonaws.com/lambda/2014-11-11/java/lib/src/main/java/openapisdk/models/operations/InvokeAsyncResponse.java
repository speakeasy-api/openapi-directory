package openapisdk.models.operations;



public class InvokeAsyncResponse {
    public String contentType;
    public InvokeAsyncResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidRequestContentException invalidRequestContentException;
    public InvokeAsyncResponse withInvalidRequestContentException(openapisdk.models.shared.InvalidRequestContentException invalidRequestContentException) {
        this.invalidRequestContentException = invalidRequestContentException;
        return this;
    }
    public openapisdk.models.shared.InvokeAsyncResponse invokeAsyncResponse;
    public InvokeAsyncResponse withInvokeAsyncResponse(openapisdk.models.shared.InvokeAsyncResponse invokeAsyncResponse) {
        this.invokeAsyncResponse = invokeAsyncResponse;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public InvokeAsyncResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.ServiceException serviceException;
    public InvokeAsyncResponse withServiceException(openapisdk.models.shared.ServiceException serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public InvokeAsyncResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}