package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest {
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams pathParams;
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest withPathParams(PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity security;
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest withSecurity(PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity security) {
        this.security = security;
        return this;
    }
}