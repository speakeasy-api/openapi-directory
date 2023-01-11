package openapisdk.models.operations;



public class CreateEnvironmentMembershipResponse {
    public Object badRequestException;
    public CreateEnvironmentMembershipResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateEnvironmentMembershipResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateEnvironmentMembershipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEnvironmentMembershipResult createEnvironmentMembershipResult;
    public CreateEnvironmentMembershipResponse withCreateEnvironmentMembershipResult(openapisdk.models.shared.CreateEnvironmentMembershipResult createEnvironmentMembershipResult) {
        this.createEnvironmentMembershipResult = createEnvironmentMembershipResult;
        return this;
    }
    public Object forbiddenException;
    public CreateEnvironmentMembershipResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public CreateEnvironmentMembershipResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object limitExceededException;
    public CreateEnvironmentMembershipResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateEnvironmentMembershipResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateEnvironmentMembershipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateEnvironmentMembershipResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}