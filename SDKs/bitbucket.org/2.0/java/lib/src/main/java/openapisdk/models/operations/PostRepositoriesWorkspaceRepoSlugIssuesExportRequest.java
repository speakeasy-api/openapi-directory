package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugIssuesExportRequest {
    public PostRepositoriesWorkspaceRepoSlugIssuesExportPathParams pathParams;
    public PostRepositoriesWorkspaceRepoSlugIssuesExportRequest withPathParams(PostRepositoriesWorkspaceRepoSlugIssuesExportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRepositoriesWorkspaceRepoSlugIssuesExportRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostRepositoriesWorkspaceRepoSlugIssuesExportSecurity security;
    public PostRepositoriesWorkspaceRepoSlugIssuesExportRequest withSecurity(PostRepositoriesWorkspaceRepoSlugIssuesExportSecurity security) {
        this.security = security;
        return this;
    }
}