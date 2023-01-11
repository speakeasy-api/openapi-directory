package openapisdk.models.operations;



public class CreatePresetResponse {
    public Object accessDeniedException;
    public CreatePresetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreatePresetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePresetResponse createPresetResponse;
    public CreatePresetResponse withCreatePresetResponse(openapisdk.models.shared.CreatePresetResponse createPresetResponse) {
        this.createPresetResponse = createPresetResponse;
        return this;
    }
    public Object incompatibleVersionException;
    public CreatePresetResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public CreatePresetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object limitExceededException;
    public CreatePresetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreatePresetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreatePresetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}