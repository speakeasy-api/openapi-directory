package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> branchingModelSettings;
    public GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse withBranchingModelSettings(java.util.Map<String, Object> branchingModelSettings) {
        this.branchingModelSettings = branchingModelSettings;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}