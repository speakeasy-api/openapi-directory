package openapisdk.models.operations;



public class PutPolicyResponse {
    public Object concurrentModificationException;
    public PutPolicyResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public PutPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArnException;
    public PutPolicyResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidPolicyException;
    public PutPolicyResponse withInvalidPolicyException(Object invalidPolicyException) {
        this.invalidPolicyException = invalidPolicyException;
        return this;
    }
    public Object invalidStateException;
    public PutPolicyResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object lockoutPreventedException;
    public PutPolicyResponse withLockoutPreventedException(Object lockoutPreventedException) {
        this.lockoutPreventedException = lockoutPreventedException;
        return this;
    }
    public Object requestFailedException;
    public PutPolicyResponse withRequestFailedException(Object requestFailedException) {
        this.requestFailedException = requestFailedException;
        return this;
    }
    public Object resourceNotFoundException;
    public PutPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}