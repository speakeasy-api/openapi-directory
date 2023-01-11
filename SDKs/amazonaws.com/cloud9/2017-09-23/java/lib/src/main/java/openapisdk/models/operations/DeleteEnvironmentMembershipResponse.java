package openapisdk.models.operations;



public class DeleteEnvironmentMembershipResponse {
    public Object badRequestException;
    public DeleteEnvironmentMembershipResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public DeleteEnvironmentMembershipResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteEnvironmentMembershipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteEnvironmentMembershipResult;
    public DeleteEnvironmentMembershipResponse withDeleteEnvironmentMembershipResult(java.util.Map<String, Object> deleteEnvironmentMembershipResult) {
        this.deleteEnvironmentMembershipResult = deleteEnvironmentMembershipResult;
        return this;
    }
    public Object forbiddenException;
    public DeleteEnvironmentMembershipResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteEnvironmentMembershipResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object limitExceededException;
    public DeleteEnvironmentMembershipResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DeleteEnvironmentMembershipResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteEnvironmentMembershipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteEnvironmentMembershipResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}