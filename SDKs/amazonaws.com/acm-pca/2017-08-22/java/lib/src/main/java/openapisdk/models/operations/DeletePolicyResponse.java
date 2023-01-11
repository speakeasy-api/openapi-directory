package openapisdk.models.operations;



public class DeletePolicyResponse {
    public Object concurrentModificationException;
    public DeletePolicyResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeletePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArnException;
    public DeletePolicyResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidStateException;
    public DeletePolicyResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object lockoutPreventedException;
    public DeletePolicyResponse withLockoutPreventedException(Object lockoutPreventedException) {
        this.lockoutPreventedException = lockoutPreventedException;
        return this;
    }
    public Object requestFailedException;
    public DeletePolicyResponse withRequestFailedException(Object requestFailedException) {
        this.requestFailedException = requestFailedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeletePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeletePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}