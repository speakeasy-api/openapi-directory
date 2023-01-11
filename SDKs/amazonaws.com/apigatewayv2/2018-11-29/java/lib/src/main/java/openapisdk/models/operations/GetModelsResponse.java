package openapisdk.models.operations;



public class GetModelsResponse {
    public Object badRequestException;
    public GetModelsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetModelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetModelsResponse getModelsResponse;
    public GetModelsResponse withGetModelsResponse(openapisdk.models.shared.GetModelsResponse getModelsResponse) {
        this.getModelsResponse = getModelsResponse;
        return this;
    }
    public Object notFoundException;
    public GetModelsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetModelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetModelsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}