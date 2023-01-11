package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deployKey;
    public GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse withDeployKey(java.util.Map<String, Object> deployKey) {
        this.deployKey = deployKey;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}