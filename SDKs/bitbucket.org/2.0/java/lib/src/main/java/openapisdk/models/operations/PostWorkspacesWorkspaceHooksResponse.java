package openapisdk.models.operations;



public class PostWorkspacesWorkspaceHooksResponse {
    public String contentType;
    public PostWorkspacesWorkspaceHooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostWorkspacesWorkspaceHooksResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostWorkspacesWorkspaceHooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostWorkspacesWorkspaceHooksResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> webhookSubscription;
    public PostWorkspacesWorkspaceHooksResponse withWebhookSubscription(java.util.Map<String, Object> webhookSubscription) {
        this.webhookSubscription = webhookSubscription;
        return this;
    }
}