package openapisdk.models.operations;



public class GetModelResponse {
    public String contentType;
    public GetModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetModelResponse getModelResponse;
    public GetModelResponse withGetModelResponse(openapisdk.models.shared.GetModelResponse getModelResponse) {
        this.getModelResponse = getModelResponse;
        return this;
    }
    public Object notFoundException;
    public GetModelResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetModelResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}