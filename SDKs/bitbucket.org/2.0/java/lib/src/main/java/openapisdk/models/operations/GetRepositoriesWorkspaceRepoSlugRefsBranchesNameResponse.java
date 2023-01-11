package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> branch;
    public GetRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse withBranch(java.util.Map<String, Object> branch) {
        this.branch = branch;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}