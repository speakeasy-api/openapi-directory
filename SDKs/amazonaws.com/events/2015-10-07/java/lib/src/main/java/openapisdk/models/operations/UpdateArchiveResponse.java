package openapisdk.models.operations;



public class UpdateArchiveResponse {
    public Object concurrentModificationException;
    public UpdateArchiveResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateArchiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateArchiveResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidEventPatternException;
    public UpdateArchiveResponse withInvalidEventPatternException(Object invalidEventPatternException) {
        this.invalidEventPatternException = invalidEventPatternException;
        return this;
    }
    public Object limitExceededException;
    public UpdateArchiveResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateArchiveResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateArchiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateArchiveResponse updateArchiveResponse;
    public UpdateArchiveResponse withUpdateArchiveResponse(openapisdk.models.shared.UpdateArchiveResponse updateArchiveResponse) {
        this.updateArchiveResponse = updateArchiveResponse;
        return this;
    }
}