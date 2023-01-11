package openapisdk.models.operations;



public class CreateArchiveResponse {
    public Object concurrentModificationException;
    public CreateArchiveResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateArchiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateArchiveResponse createArchiveResponse;
    public CreateArchiveResponse withCreateArchiveResponse(openapisdk.models.shared.CreateArchiveResponse createArchiveResponse) {
        this.createArchiveResponse = createArchiveResponse;
        return this;
    }
    public Object internalException;
    public CreateArchiveResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidEventPatternException;
    public CreateArchiveResponse withInvalidEventPatternException(Object invalidEventPatternException) {
        this.invalidEventPatternException = invalidEventPatternException;
        return this;
    }
    public Object limitExceededException;
    public CreateArchiveResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateArchiveResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateArchiveResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateArchiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}