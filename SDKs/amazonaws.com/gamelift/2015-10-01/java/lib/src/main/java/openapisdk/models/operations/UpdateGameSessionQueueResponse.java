package openapisdk.models.operations;



public class UpdateGameSessionQueueResponse {
    public String contentType;
    public UpdateGameSessionQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UpdateGameSessionQueueResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateGameSessionQueueResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public UpdateGameSessionQueueResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateGameSessionQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateGameSessionQueueResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateGameSessionQueueOutput updateGameSessionQueueOutput;
    public UpdateGameSessionQueueResponse withUpdateGameSessionQueueOutput(openapisdk.models.shared.UpdateGameSessionQueueOutput updateGameSessionQueueOutput) {
        this.updateGameSessionQueueOutput = updateGameSessionQueueOutput;
        return this;
    }
}