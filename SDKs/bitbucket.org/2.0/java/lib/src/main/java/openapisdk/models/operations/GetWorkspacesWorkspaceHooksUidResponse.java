package openapisdk.models.operations;



public class GetWorkspacesWorkspaceHooksUidResponse {
    public String contentType;
    public GetWorkspacesWorkspaceHooksUidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWorkspacesWorkspaceHooksUidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetWorkspacesWorkspaceHooksUidResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> webhookSubscription;
    public GetWorkspacesWorkspaceHooksUidResponse withWebhookSubscription(java.util.Map<String, Object> webhookSubscription) {
        this.webhookSubscription = webhookSubscription;
        return this;
    }
}