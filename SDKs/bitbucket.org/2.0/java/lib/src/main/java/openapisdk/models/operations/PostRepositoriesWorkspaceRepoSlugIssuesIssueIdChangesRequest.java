package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest {
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesPathParams pathParams;
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest withPathParams(PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesSecurity security;
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest withSecurity(PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesSecurity security) {
        this.security = security;
        return this;
    }
}