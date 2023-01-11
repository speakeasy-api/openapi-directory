package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> commit;
    public GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse withCommit(java.util.Map<String, Object> commit) {
        this.commit = commit;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}