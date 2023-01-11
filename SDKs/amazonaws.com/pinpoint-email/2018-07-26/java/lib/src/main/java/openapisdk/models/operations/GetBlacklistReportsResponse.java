package openapisdk.models.operations;



public class GetBlacklistReportsResponse {
    public Object badRequestException;
    public GetBlacklistReportsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetBlacklistReportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetBlacklistReportsResponse getBlacklistReportsResponse;
    public GetBlacklistReportsResponse withGetBlacklistReportsResponse(openapisdk.models.shared.GetBlacklistReportsResponse getBlacklistReportsResponse) {
        this.getBlacklistReportsResponse = getBlacklistReportsResponse;
        return this;
    }
    public Object notFoundException;
    public GetBlacklistReportsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetBlacklistReportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetBlacklistReportsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}