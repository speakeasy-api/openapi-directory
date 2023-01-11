package openapisdk.models.operations;



public class GetParallelDataResponse {
    public String contentType;
    public GetParallelDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetParallelDataResponse getParallelDataResponse;
    public GetParallelDataResponse withGetParallelDataResponse(openapisdk.models.shared.GetParallelDataResponse getParallelDataResponse) {
        this.getParallelDataResponse = getParallelDataResponse;
        return this;
    }
    public Object internalServerException;
    public GetParallelDataResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public GetParallelDataResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetParallelDataResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetParallelDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetParallelDataResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}