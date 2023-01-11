package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugDownloadsResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugDownloadsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugDownloadsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugDownloadsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}