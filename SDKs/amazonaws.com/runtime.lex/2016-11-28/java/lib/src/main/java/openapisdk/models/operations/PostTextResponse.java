package openapisdk.models.operations;



public class PostTextResponse {
    public Object badGatewayException;
    public PostTextResponse withBadGatewayException(Object badGatewayException) {
        this.badGatewayException = badGatewayException;
        return this;
    }
    public Object badRequestException;
    public PostTextResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public PostTextResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public PostTextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyFailedException;
    public PostTextResponse withDependencyFailedException(Object dependencyFailedException) {
        this.dependencyFailedException = dependencyFailedException;
        return this;
    }
    public Object internalFailureException;
    public PostTextResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public PostTextResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object loopDetectedException;
    public PostTextResponse withLoopDetectedException(Object loopDetectedException) {
        this.loopDetectedException = loopDetectedException;
        return this;
    }
    public Object notFoundException;
    public PostTextResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.PostTextResponse postTextResponse;
    public PostTextResponse withPostTextResponse(openapisdk.models.shared.PostTextResponse postTextResponse) {
        this.postTextResponse = postTextResponse;
        return this;
    }
    public Long statusCode;
    public PostTextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}