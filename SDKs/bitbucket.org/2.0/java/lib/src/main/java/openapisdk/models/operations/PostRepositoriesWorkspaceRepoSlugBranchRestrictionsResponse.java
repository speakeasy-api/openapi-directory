package openapisdk.models.operations;



public class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse {
    public String contentType;
    public PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> branchrestriction;
    public PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse withBranchrestriction(java.util.Map<String, Object> branchrestriction) {
        this.branchrestriction = branchrestriction;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}