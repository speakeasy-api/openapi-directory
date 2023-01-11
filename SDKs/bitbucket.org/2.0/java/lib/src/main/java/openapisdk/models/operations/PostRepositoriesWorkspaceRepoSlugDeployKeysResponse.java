package openapisdk.models.operations;



public class PostRepositoriesWorkspaceRepoSlugDeployKeysResponse {
    public String contentType;
    public PostRepositoriesWorkspaceRepoSlugDeployKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRepositoriesWorkspaceRepoSlugDeployKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deployKey;
    public PostRepositoriesWorkspaceRepoSlugDeployKeysResponse withDeployKey(java.util.Map<String, Object> deployKey) {
        this.deployKey = deployKey;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostRepositoriesWorkspaceRepoSlugDeployKeysResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}