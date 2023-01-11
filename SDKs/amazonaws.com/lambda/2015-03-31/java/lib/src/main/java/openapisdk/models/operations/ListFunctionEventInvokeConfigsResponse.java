package openapisdk.models.operations;



public class ListFunctionEventInvokeConfigsResponse {
    public String contentType;
    public ListFunctionEventInvokeConfigsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListFunctionEventInvokeConfigsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListFunctionEventInvokeConfigsResponse listFunctionEventInvokeConfigsResponse;
    public ListFunctionEventInvokeConfigsResponse withListFunctionEventInvokeConfigsResponse(openapisdk.models.shared.ListFunctionEventInvokeConfigsResponse listFunctionEventInvokeConfigsResponse) {
        this.listFunctionEventInvokeConfigsResponse = listFunctionEventInvokeConfigsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFunctionEventInvokeConfigsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public ListFunctionEventInvokeConfigsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListFunctionEventInvokeConfigsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListFunctionEventInvokeConfigsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}