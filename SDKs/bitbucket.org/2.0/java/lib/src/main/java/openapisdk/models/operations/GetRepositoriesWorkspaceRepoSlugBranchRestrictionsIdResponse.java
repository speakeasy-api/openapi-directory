package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> branchrestriction;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse withBranchrestriction(java.util.Map<String, Object> branchrestriction) {
        this.branchrestriction = branchrestriction;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}