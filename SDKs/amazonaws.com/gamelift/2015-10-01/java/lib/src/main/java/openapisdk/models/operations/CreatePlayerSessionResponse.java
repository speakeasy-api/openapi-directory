package openapisdk.models.operations;



public class CreatePlayerSessionResponse {
    public String contentType;
    public CreatePlayerSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePlayerSessionOutput createPlayerSessionOutput;
    public CreatePlayerSessionResponse withCreatePlayerSessionOutput(openapisdk.models.shared.CreatePlayerSessionOutput createPlayerSessionOutput) {
        this.createPlayerSessionOutput = createPlayerSessionOutput;
        return this;
    }
    public Object gameSessionFullException;
    public CreatePlayerSessionResponse withGameSessionFullException(Object gameSessionFullException) {
        this.gameSessionFullException = gameSessionFullException;
        return this;
    }
    public Object internalServiceException;
    public CreatePlayerSessionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidGameSessionStatusException;
    public CreatePlayerSessionResponse withInvalidGameSessionStatusException(Object invalidGameSessionStatusException) {
        this.invalidGameSessionStatusException = invalidGameSessionStatusException;
        return this;
    }
    public Object invalidRequestException;
    public CreatePlayerSessionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public CreatePlayerSessionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreatePlayerSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object terminalRoutingStrategyException;
    public CreatePlayerSessionResponse withTerminalRoutingStrategyException(Object terminalRoutingStrategyException) {
        this.terminalRoutingStrategyException = terminalRoutingStrategyException;
        return this;
    }
    public Object unauthorizedException;
    public CreatePlayerSessionResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}