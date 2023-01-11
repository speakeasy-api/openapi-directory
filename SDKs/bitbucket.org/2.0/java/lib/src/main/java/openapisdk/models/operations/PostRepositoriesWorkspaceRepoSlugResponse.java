package openapisdk.models.operations;



public class PostRepositoriesWorkspaceRepoSlugResponse {
    public String contentType;
    public PostRepositoriesWorkspaceRepoSlugResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRepositoriesWorkspaceRepoSlugResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostRepositoriesWorkspaceRepoSlugResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> repository;
    public PostRepositoriesWorkspaceRepoSlugResponse withRepository(java.util.Map<String, Object> repository) {
        this.repository = repository;
        return this;
    }
}