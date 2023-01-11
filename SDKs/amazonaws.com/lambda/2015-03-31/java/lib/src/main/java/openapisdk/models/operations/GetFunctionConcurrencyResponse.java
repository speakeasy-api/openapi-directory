package openapisdk.models.operations;



public class GetFunctionConcurrencyResponse {
    public String contentType;
    public GetFunctionConcurrencyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFunctionConcurrencyResponse getFunctionConcurrencyResponse;
    public GetFunctionConcurrencyResponse withGetFunctionConcurrencyResponse(openapisdk.models.shared.GetFunctionConcurrencyResponse getFunctionConcurrencyResponse) {
        this.getFunctionConcurrencyResponse = getFunctionConcurrencyResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetFunctionConcurrencyResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFunctionConcurrencyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetFunctionConcurrencyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetFunctionConcurrencyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetFunctionConcurrencyResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}