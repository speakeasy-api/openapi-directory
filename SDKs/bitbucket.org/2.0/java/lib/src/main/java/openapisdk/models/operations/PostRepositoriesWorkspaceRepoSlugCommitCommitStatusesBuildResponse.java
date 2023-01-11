package openapisdk.models.operations;



public class PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse {
    public String contentType;
    public PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> commitstatus;
    public PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse withCommitstatus(java.util.Map<String, Object> commitstatus) {
        this.commitstatus = commitstatus;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}