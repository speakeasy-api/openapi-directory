package openapisdk.models.operations;



public class PutPermissionResponse {
    public Object conflictException;
    public PutPermissionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public PutPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PutPermissionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.PutPermissionResponse putPermissionResponse;
    public PutPermissionResponse withPutPermissionResponse(openapisdk.models.shared.PutPermissionResponse putPermissionResponse) {
        this.putPermissionResponse = putPermissionResponse;
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
    public Object throttlingException;
    public PutPermissionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public PutPermissionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}