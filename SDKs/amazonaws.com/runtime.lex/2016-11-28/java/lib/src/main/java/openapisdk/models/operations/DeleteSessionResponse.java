package openapisdk.models.operations;



public class DeleteSessionResponse {
    public Object badRequestException;
    public DeleteSessionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public DeleteSessionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteSessionResponse deleteSessionResponse;
    public DeleteSessionResponse withDeleteSessionResponse(openapisdk.models.shared.DeleteSessionResponse deleteSessionResponse) {
        this.deleteSessionResponse = deleteSessionResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteSessionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public DeleteSessionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DeleteSessionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}