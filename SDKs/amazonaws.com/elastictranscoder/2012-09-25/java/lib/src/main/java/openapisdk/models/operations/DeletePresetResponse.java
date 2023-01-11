package openapisdk.models.operations;



public class DeletePresetResponse {
    public Object accessDeniedException;
    public DeletePresetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeletePresetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deletePresetResponse;
    public DeletePresetResponse withDeletePresetResponse(java.util.Map<String, Object> deletePresetResponse) {
        this.deletePresetResponse = deletePresetResponse;
        return this;
    }
    public Object incompatibleVersionException;
    public DeletePresetResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public DeletePresetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeletePresetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeletePresetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeletePresetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}