package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugBranchingModelResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugBranchingModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugBranchingModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> branchingModel;
    public GetRepositoriesWorkspaceRepoSlugBranchingModelResponse withBranchingModel(java.util.Map<String, Object> branchingModel) {
        this.branchingModel = branchingModel;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugBranchingModelResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}