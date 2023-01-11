package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedFiles paginatedFiles;
    public GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse withPaginatedFiles(openapisdk.models.shared.PaginatedFiles paginatedFiles) {
        this.paginatedFiles = paginatedFiles;
        return this;
    }
}