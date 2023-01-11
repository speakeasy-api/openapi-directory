package openapisdk.models.operations;



public class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse {
    public String contentType;
    public PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> branchrestriction;
    public PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse withBranchrestriction(java.util.Map<String, Object> branchrestriction) {
        this.branchrestriction = branchrestriction;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}