package openapisdk.models.operations;



public class CreatePermissionResponse {
    public String contentType;
    public CreatePermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArnException;
    public CreatePermissionResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidStateException;
    public CreatePermissionResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object limitExceededException;
    public CreatePermissionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object permissionAlreadyExistsException;
    public CreatePermissionResponse withPermissionAlreadyExistsException(Object permissionAlreadyExistsException) {
        this.permissionAlreadyExistsException = permissionAlreadyExistsException;
        return this;
    }
    public Object requestFailedException;
    public CreatePermissionResponse withRequestFailedException(Object requestFailedException) {
        this.requestFailedException = requestFailedException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreatePermissionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreatePermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}