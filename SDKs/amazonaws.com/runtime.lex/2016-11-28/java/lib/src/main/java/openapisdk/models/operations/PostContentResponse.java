package openapisdk.models.operations;



public class PostContentResponse {
    public Object badGatewayException;
    public PostContentResponse withBadGatewayException(Object badGatewayException) {
        this.badGatewayException = badGatewayException;
        return this;
    }
    public Object badRequestException;
    public PostContentResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public PostContentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public PostContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyFailedException;
    public PostContentResponse withDependencyFailedException(Object dependencyFailedException) {
        this.dependencyFailedException = dependencyFailedException;
        return this;
    }
    public Object internalFailureException;
    public PostContentResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public PostContentResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object loopDetectedException;
    public PostContentResponse withLoopDetectedException(Object loopDetectedException) {
        this.loopDetectedException = loopDetectedException;
        return this;
    }
    public Object notAcceptableException;
    public PostContentResponse withNotAcceptableException(Object notAcceptableException) {
        this.notAcceptableException = notAcceptableException;
        return this;
    }
    public Object notFoundException;
    public PostContentResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.PostContentResponse postContentResponse;
    public PostContentResponse withPostContentResponse(openapisdk.models.shared.PostContentResponse postContentResponse) {
        this.postContentResponse = postContentResponse;
        return this;
    }
    public Object requestTimeoutException;
    public PostContentResponse withRequestTimeoutException(Object requestTimeoutException) {
        this.requestTimeoutException = requestTimeoutException;
        return this;
    }
    public Long statusCode;
    public PostContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedMediaTypeException;
    public PostContentResponse withUnsupportedMediaTypeException(Object unsupportedMediaTypeException) {
        this.unsupportedMediaTypeException = unsupportedMediaTypeException;
        return this;
    }
}