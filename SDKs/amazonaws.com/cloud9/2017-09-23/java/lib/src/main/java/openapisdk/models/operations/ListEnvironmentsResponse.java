package openapisdk.models.operations;



public class ListEnvironmentsResponse {
    public Object badRequestException;
    public ListEnvironmentsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public ListEnvironmentsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListEnvironmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListEnvironmentsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public ListEnvironmentsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object limitExceededException;
    public ListEnvironmentsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListEnvironmentsResult listEnvironmentsResult;
    public ListEnvironmentsResponse withListEnvironmentsResult(openapisdk.models.shared.ListEnvironmentsResult listEnvironmentsResult) {
        this.listEnvironmentsResult = listEnvironmentsResult;
        return this;
    }
    public Object notFoundException;
    public ListEnvironmentsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListEnvironmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListEnvironmentsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}