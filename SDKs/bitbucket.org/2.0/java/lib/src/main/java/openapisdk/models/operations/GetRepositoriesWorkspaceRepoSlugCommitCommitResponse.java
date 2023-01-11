package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugCommitCommitResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> commit;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitResponse withCommit(java.util.Map<String, Object> commit) {
        this.commit = commit;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}