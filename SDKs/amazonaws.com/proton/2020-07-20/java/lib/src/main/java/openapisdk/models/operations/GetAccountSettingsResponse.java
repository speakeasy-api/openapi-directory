package openapisdk.models.operations;



public class GetAccountSettingsResponse {
    public Object accessDeniedException;
    public GetAccountSettingsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAccountSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccountSettingsOutput getAccountSettingsOutput;
    public GetAccountSettingsResponse withGetAccountSettingsOutput(openapisdk.models.shared.GetAccountSettingsOutput getAccountSettingsOutput) {
        this.getAccountSettingsOutput = getAccountSettingsOutput;
        return this;
    }
    public Object internalServerException;
    public GetAccountSettingsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAccountSettingsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAccountSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetAccountSettingsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetAccountSettingsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}