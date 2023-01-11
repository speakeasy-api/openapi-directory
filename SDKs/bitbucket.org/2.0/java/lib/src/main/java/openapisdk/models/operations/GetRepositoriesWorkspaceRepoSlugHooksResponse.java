package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugHooksResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugHooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugHooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugHooksResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedWebhookSubscriptions paginatedWebhookSubscriptions;
    public GetRepositoriesWorkspaceRepoSlugHooksResponse withPaginatedWebhookSubscriptions(openapisdk.models.shared.PaginatedWebhookSubscriptions paginatedWebhookSubscriptions) {
        this.paginatedWebhookSubscriptions = paginatedWebhookSubscriptions;
        return this;
    }
}