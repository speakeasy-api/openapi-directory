package openapisdk.models.operations;



public class GetTagsResponse {
    public Object badRequestException;
    public GetTagsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public GetTagsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTagsResponse getTagsResponse;
    public GetTagsResponse withGetTagsResponse(openapisdk.models.shared.GetTagsResponse getTagsResponse) {
        this.getTagsResponse = getTagsResponse;
        return this;
    }
    public Object notFoundException;
    public GetTagsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetTagsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}