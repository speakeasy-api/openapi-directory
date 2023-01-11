package openapisdk.models.operations;



public class UpdateDeletionProtectionResponse {
    public Object accessDeniedException;
    public UpdateDeletionProtectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateDeletionProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateDeletionProtectionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateDeletionProtectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateDeletionProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateDeletionProtectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateDeletionProtectionOutput;
    public UpdateDeletionProtectionResponse withUpdateDeletionProtectionOutput(java.util.Map<String, Object> updateDeletionProtectionOutput) {
        this.updateDeletionProtectionOutput = updateDeletionProtectionOutput;
        return this;
    }
    public Object validationException;
    public UpdateDeletionProtectionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}