package openapisdk.models.operations;



public class ReposCreateWebhookResponse {
    public String contentType;
    public ReposCreateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposCreateWebhookResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposCreateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposCreateWebhookResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Hook hook;
    public ReposCreateWebhookResponse withHook(openapisdk.models.shared.Hook hook) {
        this.hook = hook;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposCreateWebhookResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}