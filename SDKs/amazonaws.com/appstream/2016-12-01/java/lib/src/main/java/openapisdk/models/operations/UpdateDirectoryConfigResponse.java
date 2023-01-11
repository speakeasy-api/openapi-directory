package openapisdk.models.operations;



public class UpdateDirectoryConfigResponse {
    public Object concurrentModificationException;
    public UpdateDirectoryConfigResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateDirectoryConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRoleException;
    public UpdateDirectoryConfigResponse withInvalidRoleException(Object invalidRoleException) {
        this.invalidRoleException = invalidRoleException;
        return this;
    }
    public Object operationNotPermittedException;
    public UpdateDirectoryConfigResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateDirectoryConfigResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateDirectoryConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateDirectoryConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateDirectoryConfigResult updateDirectoryConfigResult;
    public UpdateDirectoryConfigResponse withUpdateDirectoryConfigResult(openapisdk.models.shared.UpdateDirectoryConfigResult updateDirectoryConfigResult) {
        this.updateDirectoryConfigResult = updateDirectoryConfigResult;
        return this;
    }
}