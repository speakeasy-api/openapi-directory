package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> repository;
    public GetRepositoriesWorkspaceRepoSlugResponse withRepository(java.util.Map<String, Object> repository) {
        this.repository = repository;
        return this;
    }
}