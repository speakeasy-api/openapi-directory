package openapisdk.models.operations;



public class RemoveTargetsResponse {
    public Object concurrentModificationException;
    public RemoveTargetsResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public RemoveTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public RemoveTargetsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object managedRuleException;
    public RemoveTargetsResponse withManagedRuleException(Object managedRuleException) {
        this.managedRuleException = managedRuleException;
        return this;
    }
    public openapisdk.models.shared.RemoveTargetsResponse removeTargetsResponse;
    public RemoveTargetsResponse withRemoveTargetsResponse(openapisdk.models.shared.RemoveTargetsResponse removeTargetsResponse) {
        this.removeTargetsResponse = removeTargetsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public RemoveTargetsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RemoveTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}