package openapisdk.models.operations;



public class ReadPresetResponse {
    public Object accessDeniedException;
    public ReadPresetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ReadPresetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleVersionException;
    public ReadPresetResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public ReadPresetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.ReadPresetResponse readPresetResponse;
    public ReadPresetResponse withReadPresetResponse(openapisdk.models.shared.ReadPresetResponse readPresetResponse) {
        this.readPresetResponse = readPresetResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ReadPresetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ReadPresetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ReadPresetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}