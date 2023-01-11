package openapisdk.models.operations;



public class CreateRecordingConfigurationResponse {
    public Object accessDeniedException;
    public CreateRecordingConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateRecordingConfigurationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateRecordingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRecordingConfigurationResponse createRecordingConfigurationResponse;
    public CreateRecordingConfigurationResponse withCreateRecordingConfigurationResponse(openapisdk.models.shared.CreateRecordingConfigurationResponse createRecordingConfigurationResponse) {
        this.createRecordingConfigurationResponse = createRecordingConfigurationResponse;
        return this;
    }
    public Object internalServerException;
    public CreateRecordingConfigurationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object pendingVerification;
    public CreateRecordingConfigurationResponse withPendingVerification(Object pendingVerification) {
        this.pendingVerification = pendingVerification;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateRecordingConfigurationResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateRecordingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateRecordingConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}