package openapisdk.models.operations;



public class DeleteGameSessionQueueResponse {
    public String contentType;
    public DeleteGameSessionQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteGameSessionQueueOutput;
    public DeleteGameSessionQueueResponse withDeleteGameSessionQueueOutput(java.util.Map<String, Object> deleteGameSessionQueueOutput) {
        this.deleteGameSessionQueueOutput = deleteGameSessionQueueOutput;
        return this;
    }
    public Object internalServiceException;
    public DeleteGameSessionQueueResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteGameSessionQueueResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DeleteGameSessionQueueResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteGameSessionQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taggingFailedException;
    public DeleteGameSessionQueueResponse withTaggingFailedException(Object taggingFailedException) {
        this.taggingFailedException = taggingFailedException;
        return this;
    }
    public Object unauthorizedException;
    public DeleteGameSessionQueueResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}