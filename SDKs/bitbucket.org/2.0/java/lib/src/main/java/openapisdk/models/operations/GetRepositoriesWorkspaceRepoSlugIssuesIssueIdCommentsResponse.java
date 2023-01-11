package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedIssueComments paginatedIssueComments;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse withPaginatedIssueComments(openapisdk.models.shared.PaginatedIssueComments paginatedIssueComments) {
        this.paginatedIssueComments = paginatedIssueComments;
        return this;
    }
}