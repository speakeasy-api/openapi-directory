package openapisdk.models.operations;



public class CreateGameServerGroupResponse {
    public Object conflictException;
    public CreateGameServerGroupResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateGameServerGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateGameServerGroupOutput createGameServerGroupOutput;
    public CreateGameServerGroupResponse withCreateGameServerGroupOutput(openapisdk.models.shared.CreateGameServerGroupOutput createGameServerGroupOutput) {
        this.createGameServerGroupOutput = createGameServerGroupOutput;
        return this;
    }
    public Object internalServiceException;
    public CreateGameServerGroupResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public CreateGameServerGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateGameServerGroupResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateGameServerGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateGameServerGroupResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}