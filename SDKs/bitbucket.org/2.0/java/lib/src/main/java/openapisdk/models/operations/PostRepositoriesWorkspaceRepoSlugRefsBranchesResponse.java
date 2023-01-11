package openapisdk.models.operations;



public class PostRepositoriesWorkspaceRepoSlugRefsBranchesResponse {
    public String contentType;
    public PostRepositoriesWorkspaceRepoSlugRefsBranchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRepositoriesWorkspaceRepoSlugRefsBranchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> branch;
    public PostRepositoriesWorkspaceRepoSlugRefsBranchesResponse withBranch(java.util.Map<String, Object> branch) {
        this.branch = branch;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostRepositoriesWorkspaceRepoSlugRefsBranchesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}