package openapisdk.models.operations;



public class DeleteRuleResponse {
    public Object concurrentModificationException;
    public DeleteRuleResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public DeleteRuleResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object managedRuleException;
    public DeleteRuleResponse withManagedRuleException(Object managedRuleException) {
        this.managedRuleException = managedRuleException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}