package openapisdk.models.operations;



public class CreateGameSessionQueueResponse {
    public String contentType;
    public CreateGameSessionQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateGameSessionQueueOutput createGameSessionQueueOutput;
    public CreateGameSessionQueueResponse withCreateGameSessionQueueOutput(openapisdk.models.shared.CreateGameSessionQueueOutput createGameSessionQueueOutput) {
        this.createGameSessionQueueOutput = createGameSessionQueueOutput;
        return this;
    }
    public Object internalServiceException;
    public CreateGameSessionQueueResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public CreateGameSessionQueueResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateGameSessionQueueResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateGameSessionQueueResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateGameSessionQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taggingFailedException;
    public CreateGameSessionQueueResponse withTaggingFailedException(Object taggingFailedException) {
        this.taggingFailedException = taggingFailedException;
        return this;
    }
    public Object unauthorizedException;
    public CreateGameSessionQueueResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}