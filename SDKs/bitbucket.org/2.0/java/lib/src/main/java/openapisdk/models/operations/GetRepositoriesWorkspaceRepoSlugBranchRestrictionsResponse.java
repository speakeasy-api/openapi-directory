package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedBranchrestrictions paginatedBranchrestrictions;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse withPaginatedBranchrestrictions(openapisdk.models.shared.PaginatedBranchrestrictions paginatedBranchrestrictions) {
        this.paginatedBranchrestrictions = paginatedBranchrestrictions;
        return this;
    }
}