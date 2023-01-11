package openapisdk.models.operations;



public class ListVersionsByFunctionResponse {
    public String contentType;
    public ListVersionsByFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListVersionsByFunctionResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListVersionsByFunctionResponse listVersionsByFunctionResponse;
    public ListVersionsByFunctionResponse withListVersionsByFunctionResponse(openapisdk.models.shared.ListVersionsByFunctionResponse listVersionsByFunctionResponse) {
        this.listVersionsByFunctionResponse = listVersionsByFunctionResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListVersionsByFunctionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public ListVersionsByFunctionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListVersionsByFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListVersionsByFunctionResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}