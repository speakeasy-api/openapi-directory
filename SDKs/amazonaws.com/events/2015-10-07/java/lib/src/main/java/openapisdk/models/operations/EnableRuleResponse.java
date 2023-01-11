package openapisdk.models.operations;



public class EnableRuleResponse {
    public Object concurrentModificationException;
    public EnableRuleResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public EnableRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public EnableRuleResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object managedRuleException;
    public EnableRuleResponse withManagedRuleException(Object managedRuleException) {
        this.managedRuleException = managedRuleException;
        return this;
    }
    public Object resourceNotFoundException;
    public EnableRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public EnableRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}