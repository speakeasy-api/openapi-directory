package openapisdk.models.operations;



public class RegisterWebhookWithThirdPartyResponse {
    public String contentType;
    public RegisterWebhookWithThirdPartyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> registerWebhookWithThirdPartyOutput;
    public RegisterWebhookWithThirdPartyResponse withRegisterWebhookWithThirdPartyOutput(java.util.Map<String, Object> registerWebhookWithThirdPartyOutput) {
        this.registerWebhookWithThirdPartyOutput = registerWebhookWithThirdPartyOutput;
        return this;
    }
    public Long statusCode;
    public RegisterWebhookWithThirdPartyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public RegisterWebhookWithThirdPartyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    public Object webhookNotFoundException;
    public RegisterWebhookWithThirdPartyResponse withWebhookNotFoundException(Object webhookNotFoundException) {
        this.webhookNotFoundException = webhookNotFoundException;
        return this;
    }
}