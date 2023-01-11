package openapisdk.models.operations;



public class GetWorkspacesWorkspaceHooksResponse {
    public String contentType;
    public GetWorkspacesWorkspaceHooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWorkspacesWorkspaceHooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetWorkspacesWorkspaceHooksResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedWebhookSubscriptions paginatedWebhookSubscriptions;
    public GetWorkspacesWorkspaceHooksResponse withPaginatedWebhookSubscriptions(openapisdk.models.shared.PaginatedWebhookSubscriptions paginatedWebhookSubscriptions) {
        this.paginatedWebhookSubscriptions = paginatedWebhookSubscriptions;
        return this;
    }
}