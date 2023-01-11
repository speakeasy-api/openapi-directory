package openapisdk.models.operations;



public class GetStageResponse {
    public String contentType;
    public GetStageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetStageResponse getStageResponse;
    public GetStageResponse withGetStageResponse(openapisdk.models.shared.GetStageResponse getStageResponse) {
        this.getStageResponse = getStageResponse;
        return this;
    }
    public Object notFoundException;
    public GetStageResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetStageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetStageResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}