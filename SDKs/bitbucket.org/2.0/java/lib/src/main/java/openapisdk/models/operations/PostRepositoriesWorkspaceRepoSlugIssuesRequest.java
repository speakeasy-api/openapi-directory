package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugIssuesRequest {
    public PostRepositoriesWorkspaceRepoSlugIssuesPathParams pathParams;
    public PostRepositoriesWorkspaceRepoSlugIssuesRequest withPathParams(PostRepositoriesWorkspaceRepoSlugIssuesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRepositoriesWorkspaceRepoSlugIssuesRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostRepositoriesWorkspaceRepoSlugIssuesSecurity security;
    public PostRepositoriesWorkspaceRepoSlugIssuesRequest withSecurity(PostRepositoriesWorkspaceRepoSlugIssuesSecurity security) {
        this.security = security;
        return this;
    }
}