package openapisdk.models.operations;



public class PutPermissionResponse {
    public Object concurrentModificationException;
    public PutPermissionResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public PutPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public PutPermissionResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object operationDisabledException;
    public PutPermissionResponse withOperationDisabledException(Object operationDisabledException) {
        this.operationDisabledException = operationDisabledException;
        return this;
    }
    public Object policyLengthExceededException;
    public PutPermissionResponse withPolicyLengthExceededException(Object policyLengthExceededException) {
        this.policyLengthExceededException = policyLengthExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public PutPermissionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}