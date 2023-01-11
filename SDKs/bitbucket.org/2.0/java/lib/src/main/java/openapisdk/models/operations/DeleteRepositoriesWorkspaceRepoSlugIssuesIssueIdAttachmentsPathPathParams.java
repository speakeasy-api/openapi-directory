package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=issue_id")
    public String issueId;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams withIssueId(String issueId) {
        this.issueId = issueId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}