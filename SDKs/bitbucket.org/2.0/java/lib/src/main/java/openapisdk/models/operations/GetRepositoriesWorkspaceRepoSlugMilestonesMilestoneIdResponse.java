package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> milestone;
    public GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse withMilestone(java.util.Map<String, Object> milestone) {
        this.milestone = milestone;
        return this;
    }
}