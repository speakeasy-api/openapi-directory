package openapisdk.models.operations;



public class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse {
    public String contentType;
    public PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> branchingModelSettings;
    public PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse withBranchingModelSettings(java.util.Map<String, Object> branchingModelSettings) {
        this.branchingModelSettings = branchingModelSettings;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}