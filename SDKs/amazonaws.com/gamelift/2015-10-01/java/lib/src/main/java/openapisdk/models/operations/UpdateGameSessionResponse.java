package openapisdk.models.operations;



public class UpdateGameSessionResponse {
    public Object conflictException;
    public UpdateGameSessionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateGameSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UpdateGameSessionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidGameSessionStatusException;
    public UpdateGameSessionResponse withInvalidGameSessionStatusException(Object invalidGameSessionStatusException) {
        this.invalidGameSessionStatusException = invalidGameSessionStatusException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateGameSessionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public UpdateGameSessionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateGameSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateGameSessionResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateGameSessionOutput updateGameSessionOutput;
    public UpdateGameSessionResponse withUpdateGameSessionOutput(openapisdk.models.shared.UpdateGameSessionOutput updateGameSessionOutput) {
        this.updateGameSessionOutput = updateGameSessionOutput;
        return this;
    }
}