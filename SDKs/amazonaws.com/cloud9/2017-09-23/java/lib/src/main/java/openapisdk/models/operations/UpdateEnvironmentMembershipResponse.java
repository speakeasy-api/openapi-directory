package openapisdk.models.operations;



public class UpdateEnvironmentMembershipResponse {
    public Object badRequestException;
    public UpdateEnvironmentMembershipResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public UpdateEnvironmentMembershipResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateEnvironmentMembershipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public UpdateEnvironmentMembershipResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateEnvironmentMembershipResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object limitExceededException;
    public UpdateEnvironmentMembershipResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateEnvironmentMembershipResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateEnvironmentMembershipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateEnvironmentMembershipResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateEnvironmentMembershipResult updateEnvironmentMembershipResult;
    public UpdateEnvironmentMembershipResponse withUpdateEnvironmentMembershipResult(openapisdk.models.shared.UpdateEnvironmentMembershipResult updateEnvironmentMembershipResult) {
        this.updateEnvironmentMembershipResult = updateEnvironmentMembershipResult;
        return this;
    }
}