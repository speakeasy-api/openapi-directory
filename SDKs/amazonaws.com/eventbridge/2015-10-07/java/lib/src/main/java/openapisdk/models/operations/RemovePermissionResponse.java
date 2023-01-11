package openapisdk.models.operations;



public class RemovePermissionResponse {
    public Object concurrentModificationException;
    public RemovePermissionResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public RemovePermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public RemovePermissionResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object operationDisabledException;
    public RemovePermissionResponse withOperationDisabledException(Object operationDisabledException) {
        this.operationDisabledException = operationDisabledException;
        return this;
    }
    public Object resourceNotFoundException;
    public RemovePermissionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RemovePermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}