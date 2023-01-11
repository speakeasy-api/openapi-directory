package openapisdk.models.operations;



public class RemovePermissionResponse {
    public Object conflictException;
    public RemovePermissionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public RemovePermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public RemovePermissionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.RemovePermissionResponse removePermissionResponse;
    public RemovePermissionResponse withRemovePermissionResponse(openapisdk.models.shared.RemovePermissionResponse removePermissionResponse) {
        this.removePermissionResponse = removePermissionResponse;
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
    public Object throttlingException;
    public RemovePermissionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public RemovePermissionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}