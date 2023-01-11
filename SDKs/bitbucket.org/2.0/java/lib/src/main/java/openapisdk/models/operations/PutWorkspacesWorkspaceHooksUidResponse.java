package openapisdk.models.operations;



public class PutWorkspacesWorkspaceHooksUidResponse {
    public String contentType;
    public PutWorkspacesWorkspaceHooksUidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutWorkspacesWorkspaceHooksUidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutWorkspacesWorkspaceHooksUidResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> webhookSubscription;
    public PutWorkspacesWorkspaceHooksUidResponse withWebhookSubscription(java.util.Map<String, Object> webhookSubscription) {
        this.webhookSubscription = webhookSubscription;
        return this;
    }
}