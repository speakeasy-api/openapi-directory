package openapisdk.models.operations;



public class PutRuleResponse {
    public Object concurrentModificationException;
    public PutRuleResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public PutRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public PutRuleResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidEventPatternException;
    public PutRuleResponse withInvalidEventPatternException(Object invalidEventPatternException) {
        this.invalidEventPatternException = invalidEventPatternException;
        return this;
    }
    public Object limitExceededException;
    public PutRuleResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object managedRuleException;
    public PutRuleResponse withManagedRuleException(Object managedRuleException) {
        this.managedRuleException = managedRuleException;
        return this;
    }
    public openapisdk.models.shared.PutRuleResponse putRuleResponse;
    public PutRuleResponse withPutRuleResponse(openapisdk.models.shared.PutRuleResponse putRuleResponse) {
        this.putRuleResponse = putRuleResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}