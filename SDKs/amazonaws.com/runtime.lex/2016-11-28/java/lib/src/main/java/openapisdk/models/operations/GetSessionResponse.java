package openapisdk.models.operations;



public class GetSessionResponse {
    public Object badRequestException;
    public GetSessionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSessionResponse getSessionResponse;
    public GetSessionResponse withGetSessionResponse(openapisdk.models.shared.GetSessionResponse getSessionResponse) {
        this.getSessionResponse = getSessionResponse;
        return this;
    }
    public Object internalFailureException;
    public GetSessionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public GetSessionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetSessionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}