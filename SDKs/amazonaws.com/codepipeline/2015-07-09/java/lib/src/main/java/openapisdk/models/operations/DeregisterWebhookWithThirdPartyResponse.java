package openapisdk.models.operations;



public class DeregisterWebhookWithThirdPartyResponse {
    public String contentType;
    public DeregisterWebhookWithThirdPartyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deregisterWebhookWithThirdPartyOutput;
    public DeregisterWebhookWithThirdPartyResponse withDeregisterWebhookWithThirdPartyOutput(java.util.Map<String, Object> deregisterWebhookWithThirdPartyOutput) {
        this.deregisterWebhookWithThirdPartyOutput = deregisterWebhookWithThirdPartyOutput;
        return this;
    }
    public Long statusCode;
    public DeregisterWebhookWithThirdPartyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeregisterWebhookWithThirdPartyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    public Object webhookNotFoundException;
    public DeregisterWebhookWithThirdPartyResponse withWebhookNotFoundException(Object webhookNotFoundException) {
        this.webhookNotFoundException = webhookNotFoundException;
        return this;
    }
}