package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=issue_id")
    public String issueId;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams withIssueId(String issueId) {
        this.issueId = issueId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}