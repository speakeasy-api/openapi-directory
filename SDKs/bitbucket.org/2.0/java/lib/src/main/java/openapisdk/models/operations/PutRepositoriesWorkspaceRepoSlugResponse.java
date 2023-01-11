package openapisdk.models.operations;



public class PutRepositoriesWorkspaceRepoSlugResponse {
    public String contentType;
    public PutRepositoriesWorkspaceRepoSlugResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutRepositoriesWorkspaceRepoSlugResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutRepositoriesWorkspaceRepoSlugResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutRepositoriesWorkspaceRepoSlugResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> repository;
    public PutRepositoriesWorkspaceRepoSlugResponse withRepository(java.util.Map<String, Object> repository) {
        this.repository = repository;
        return this;
    }
}