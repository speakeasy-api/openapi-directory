package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugMilestonesResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugMilestonesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugMilestonesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugMilestonesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedMilestones paginatedMilestones;
    public GetRepositoriesWorkspaceRepoSlugMilestonesResponse withPaginatedMilestones(openapisdk.models.shared.PaginatedMilestones paginatedMilestones) {
        this.paginatedMilestones = paginatedMilestones;
        return this;
    }
}