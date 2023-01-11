package openapisdk.models.operations;



public class TagResourceResponse {
    public Object badRequestException;
    public TagResourceResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public TagResourceResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public TagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public TagResourceResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public TagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> tagResourceResponse;
    public TagResourceResponse withTagResourceResponse(java.util.Map<String, Object> tagResourceResponse) {
        this.tagResourceResponse = tagResourceResponse;
        return this;
    }
    public Object tooManyRequestsException;
    public TagResourceResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}