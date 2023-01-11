package openapisdk.models.operations;



public class CreatePlayerSessionsResponse {
    public String contentType;
    public CreatePlayerSessionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePlayerSessionsOutput createPlayerSessionsOutput;
    public CreatePlayerSessionsResponse withCreatePlayerSessionsOutput(openapisdk.models.shared.CreatePlayerSessionsOutput createPlayerSessionsOutput) {
        this.createPlayerSessionsOutput = createPlayerSessionsOutput;
        return this;
    }
    public Object gameSessionFullException;
    public CreatePlayerSessionsResponse withGameSessionFullException(Object gameSessionFullException) {
        this.gameSessionFullException = gameSessionFullException;
        return this;
    }
    public Object internalServiceException;
    public CreatePlayerSessionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidGameSessionStatusException;
    public CreatePlayerSessionsResponse withInvalidGameSessionStatusException(Object invalidGameSessionStatusException) {
        this.invalidGameSessionStatusException = invalidGameSessionStatusException;
        return this;
    }
    public Object invalidRequestException;
    public CreatePlayerSessionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public CreatePlayerSessionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreatePlayerSessionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object terminalRoutingStrategyException;
    public CreatePlayerSessionsResponse withTerminalRoutingStrategyException(Object terminalRoutingStrategyException) {
        this.terminalRoutingStrategyException = terminalRoutingStrategyException;
        return this;
    }
    public Object unauthorizedException;
    public CreatePlayerSessionsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}