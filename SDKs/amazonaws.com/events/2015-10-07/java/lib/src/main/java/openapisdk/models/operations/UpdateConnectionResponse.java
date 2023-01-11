package openapisdk.models.operations;



public class UpdateConnectionResponse {
    public Object concurrentModificationException;
    public UpdateConnectionResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateConnectionResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object limitExceededException;
    public UpdateConnectionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateConnectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateConnectionResponse updateConnectionResponse;
    public UpdateConnectionResponse withUpdateConnectionResponse(openapisdk.models.shared.UpdateConnectionResponse updateConnectionResponse) {
        this.updateConnectionResponse = updateConnectionResponse;
        return this;
    }
}