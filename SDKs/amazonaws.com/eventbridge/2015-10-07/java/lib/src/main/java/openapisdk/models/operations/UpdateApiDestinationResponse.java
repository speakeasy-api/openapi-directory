package openapisdk.models.operations;



public class UpdateApiDestinationResponse {
    public Object concurrentModificationException;
    public UpdateApiDestinationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateApiDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateApiDestinationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object limitExceededException;
    public UpdateApiDestinationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateApiDestinationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateApiDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateApiDestinationResponse updateApiDestinationResponse;
    public UpdateApiDestinationResponse withUpdateApiDestinationResponse(openapisdk.models.shared.UpdateApiDestinationResponse updateApiDestinationResponse) {
        this.updateApiDestinationResponse = updateApiDestinationResponse;
        return this;
    }
}