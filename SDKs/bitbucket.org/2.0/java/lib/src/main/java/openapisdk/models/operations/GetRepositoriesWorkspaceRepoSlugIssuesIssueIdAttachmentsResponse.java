package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedIssueAttachments paginatedIssueAttachments;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse withPaginatedIssueAttachments(openapisdk.models.shared.PaginatedIssueAttachments paginatedIssueAttachments) {
        this.paginatedIssueAttachments = paginatedIssueAttachments;
        return this;
    }
}