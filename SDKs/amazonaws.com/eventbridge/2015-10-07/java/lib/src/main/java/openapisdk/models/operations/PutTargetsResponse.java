package openapisdk.models.operations;



public class PutTargetsResponse {
    public Object concurrentModificationException;
    public PutTargetsResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public PutTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public PutTargetsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object limitExceededException;
    public PutTargetsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object managedRuleException;
    public PutTargetsResponse withManagedRuleException(Object managedRuleException) {
        this.managedRuleException = managedRuleException;
        return this;
    }
    public openapisdk.models.shared.PutTargetsResponse putTargetsResponse;
    public PutTargetsResponse withPutTargetsResponse(openapisdk.models.shared.PutTargetsResponse putTargetsResponse) {
        this.putTargetsResponse = putTargetsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutTargetsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}