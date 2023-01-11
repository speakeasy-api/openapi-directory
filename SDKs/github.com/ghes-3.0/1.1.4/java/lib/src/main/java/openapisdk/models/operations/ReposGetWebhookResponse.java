package openapisdk.models.operations;



public class ReposGetWebhookResponse {
    public String contentType;
    public ReposGetWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetWebhookResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Hook hook;
    public ReposGetWebhookResponse withHook(openapisdk.models.shared.Hook hook) {
        this.hook = hook;
        return this;
    }
}