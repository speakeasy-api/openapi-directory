package openapisdk.models.operations;



public class CreateGameSessionResponse {
    public Object conflictException;
    public CreateGameSessionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateGameSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateGameSessionOutput createGameSessionOutput;
    public CreateGameSessionResponse withCreateGameSessionOutput(openapisdk.models.shared.CreateGameSessionOutput createGameSessionOutput) {
        this.createGameSessionOutput = createGameSessionOutput;
        return this;
    }
    public Object fleetCapacityExceededException;
    public CreateGameSessionResponse withFleetCapacityExceededException(Object fleetCapacityExceededException) {
        this.fleetCapacityExceededException = fleetCapacityExceededException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateGameSessionResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServiceException;
    public CreateGameSessionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidFleetStatusException;
    public CreateGameSessionResponse withInvalidFleetStatusException(Object invalidFleetStatusException) {
        this.invalidFleetStatusException = invalidFleetStatusException;
        return this;
    }
    public Object invalidRequestException;
    public CreateGameSessionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateGameSessionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateGameSessionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateGameSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object terminalRoutingStrategyException;
    public CreateGameSessionResponse withTerminalRoutingStrategyException(Object terminalRoutingStrategyException) {
        this.terminalRoutingStrategyException = terminalRoutingStrategyException;
        return this;
    }
    public Object unauthorizedException;
    public CreateGameSessionResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}