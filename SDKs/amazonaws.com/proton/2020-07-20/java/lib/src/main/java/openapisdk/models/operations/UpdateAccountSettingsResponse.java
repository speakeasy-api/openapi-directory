package openapisdk.models.operations;



public class UpdateAccountSettingsResponse {
    public Object accessDeniedException;
    public UpdateAccountSettingsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateAccountSettingsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateAccountSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateAccountSettingsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public UpdateAccountSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateAccountSettingsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateAccountSettingsOutput updateAccountSettingsOutput;
    public UpdateAccountSettingsResponse withUpdateAccountSettingsOutput(openapisdk.models.shared.UpdateAccountSettingsOutput updateAccountSettingsOutput) {
        this.updateAccountSettingsOutput = updateAccountSettingsOutput;
        return this;
    }
    public Object validationException;
    public UpdateAccountSettingsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}