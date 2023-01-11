package openapisdk.models.operations;



public class PutSessionResponse {
    public Object badGatewayException;
    public PutSessionResponse withBadGatewayException(Object badGatewayException) {
        this.badGatewayException = badGatewayException;
        return this;
    }
    public Object badRequestException;
    public PutSessionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public PutSessionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public PutSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyFailedException;
    public PutSessionResponse withDependencyFailedException(Object dependencyFailedException) {
        this.dependencyFailedException = dependencyFailedException;
        return this;
    }
    public Object internalFailureException;
    public PutSessionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public PutSessionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAcceptableException;
    public PutSessionResponse withNotAcceptableException(Object notAcceptableException) {
        this.notAcceptableException = notAcceptableException;
        return this;
    }
    public Object notFoundException;
    public PutSessionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.PutSessionResponse putSessionResponse;
    public PutSessionResponse withPutSessionResponse(openapisdk.models.shared.PutSessionResponse putSessionResponse) {
        this.putSessionResponse = putSessionResponse;
        return this;
    }
    public Long statusCode;
    public PutSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}