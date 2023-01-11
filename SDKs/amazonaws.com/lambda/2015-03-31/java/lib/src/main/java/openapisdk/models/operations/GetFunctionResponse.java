package openapisdk.models.operations;



public class GetFunctionResponse {
    public String contentType;
    public GetFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFunctionResponse getFunctionResponse;
    public GetFunctionResponse withGetFunctionResponse(openapisdk.models.shared.GetFunctionResponse getFunctionResponse) {
        this.getFunctionResponse = getFunctionResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetFunctionResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFunctionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetFunctionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetFunctionResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}