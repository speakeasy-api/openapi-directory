package openapisdk.models.operations;



public class GetStagesResponse {
    public Object badRequestException;
    public GetStagesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetStagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetStagesResponse getStagesResponse;
    public GetStagesResponse withGetStagesResponse(openapisdk.models.shared.GetStagesResponse getStagesResponse) {
        this.getStagesResponse = getStagesResponse;
        return this;
    }
    public Object notFoundException;
    public GetStagesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetStagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetStagesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}