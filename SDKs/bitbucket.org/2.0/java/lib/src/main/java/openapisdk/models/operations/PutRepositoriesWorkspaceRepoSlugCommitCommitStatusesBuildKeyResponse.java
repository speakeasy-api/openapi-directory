package openapisdk.models.operations;



public class PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse {
    public String contentType;
    public PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> commitstatus;
    public PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse withCommitstatus(java.util.Map<String, Object> commitstatus) {
        this.commitstatus = commitstatus;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}