package openapisdk.models.operations;



public class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse {
    public String contentType;
    public PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deployKey;
    public PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse withDeployKey(java.util.Map<String, Object> deployKey) {
        this.deployKey = deployKey;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}