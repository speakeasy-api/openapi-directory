package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugHooksUidResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugHooksUidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugHooksUidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugHooksUidResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> webhookSubscription;
    public GetRepositoriesWorkspaceRepoSlugHooksUidResponse withWebhookSubscription(java.util.Map<String, Object> webhookSubscription) {
        this.webhookSubscription = webhookSubscription;
        return this;
    }
}