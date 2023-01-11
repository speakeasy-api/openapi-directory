package openapisdk.models.operations;



public class ReposListWebhooksResponse {
    public String contentType;
    public ReposListWebhooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListWebhooksResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListWebhooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposListWebhooksResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Hook[] hooks;
    public ReposListWebhooksResponse withHooks(openapisdk.models.shared.Hook[] hooks) {
        this.hooks = hooks;
        return this;
    }
}