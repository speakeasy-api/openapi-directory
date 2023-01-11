package openapisdk.models.operations;



public class PostRepositoriesWorkspaceRepoSlugForksResponse {
    public String contentType;
    public PostRepositoriesWorkspaceRepoSlugForksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRepositoriesWorkspaceRepoSlugForksResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostRepositoriesWorkspaceRepoSlugForksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> repository;
    public PostRepositoriesWorkspaceRepoSlugForksResponse withRepository(java.util.Map<String, Object> repository) {
        this.repository = repository;
        return this;
    }
}