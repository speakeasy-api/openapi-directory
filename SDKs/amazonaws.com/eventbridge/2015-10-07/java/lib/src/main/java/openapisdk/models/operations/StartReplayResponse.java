package openapisdk.models.operations;



public class StartReplayResponse {
    public String contentType;
    public StartReplayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public StartReplayResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidEventPatternException;
    public StartReplayResponse withInvalidEventPatternException(Object invalidEventPatternException) {
        this.invalidEventPatternException = invalidEventPatternException;
        return this;
    }
    public Object limitExceededException;
    public StartReplayResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public StartReplayResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartReplayResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartReplayResponse startReplayResponse;
    public StartReplayResponse withStartReplayResponse(openapisdk.models.shared.StartReplayResponse startReplayResponse) {
        this.startReplayResponse = startReplayResponse;
        return this;
    }
    public Long statusCode;
    public StartReplayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}