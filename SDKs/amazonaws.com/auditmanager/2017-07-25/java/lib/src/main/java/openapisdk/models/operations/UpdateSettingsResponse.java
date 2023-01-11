package openapisdk.models.operations;



public class UpdateSettingsResponse {
    public Object accessDeniedException;
    public UpdateSettingsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateSettingsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public UpdateSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateSettingsResponse updateSettingsResponse;
    public UpdateSettingsResponse withUpdateSettingsResponse(openapisdk.models.shared.UpdateSettingsResponse updateSettingsResponse) {
        this.updateSettingsResponse = updateSettingsResponse;
        return this;
    }
    public Object validationException;
    public UpdateSettingsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}