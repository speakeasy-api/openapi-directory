package openapisdk.models.operations;



public class StartGameSessionPlacementResponse {
    public String contentType;
    public StartGameSessionPlacementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public StartGameSessionPlacementResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public StartGameSessionPlacementResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public StartGameSessionPlacementResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.StartGameSessionPlacementOutput startGameSessionPlacementOutput;
    public StartGameSessionPlacementResponse withStartGameSessionPlacementOutput(openapisdk.models.shared.StartGameSessionPlacementOutput startGameSessionPlacementOutput) {
        this.startGameSessionPlacementOutput = startGameSessionPlacementOutput;
        return this;
    }
    public Long statusCode;
    public StartGameSessionPlacementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public StartGameSessionPlacementResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}