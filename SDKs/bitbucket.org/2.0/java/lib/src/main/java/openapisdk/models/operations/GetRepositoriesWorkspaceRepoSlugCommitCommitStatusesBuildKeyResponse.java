package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> commitstatus;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse withCommitstatus(java.util.Map<String, Object> commitstatus) {
        this.commitstatus = commitstatus;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}